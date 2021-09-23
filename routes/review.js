const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const { csrfProtection, asyncHandler } = require('../utils');
const db = require('../db/models');

const router = express.Router();

const errorValidators = [
  check("rating")
    .exists({ checkFalsy: true })
    .withMessage("Please add a Rating"),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Please add a Review"),
]

router.post('/', csrfProtection, errorValidators, asyncHandler(async (req,res,next) => {
    const { api_id, review, rating } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const newReview = await db.Review.create({
          api_id,
          user_id:userId,
          review,
          rating
      });
      return res.redirect(`/apis/${api_id}`)
    } else {
      const api = await db.Api.findByPk(api_id);
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("reviews", { title:"AceAPI Submit Review", csrfToken: req.csrfToken(), api, errors })
    }
  })
);

router.get(`/:id(\\d+)/update`, csrfProtection, requireAuth, asyncHandler( async (req, res, next) => {
  const reviewId = req.params.id;
  const editedReview = await db.Review.findByPk(reviewId, {include: { model: db.Api }});

  if (editedReview) {
    //Check if the review owner is the same as the logged in user
    //Redirect to home page if not
      if (editedReview.user_id === req.session.auth.userId) {
        res.render('edit_reviews', {title: "Ace API - Edit Review", csrfToken: req.csrfToken(), editedReview})
      } else {
        res.redirect("/")
      }
  } else {
    res.next();
  }
}));

router.post(`/:id(\\d+)/update`, csrfProtection, requireAuth, errorValidators, asyncHandler( async (req, res, next) => {
  const { api_id, review, rating } = req.body;

  const reviewId = req.params.id;
  const editedReview = await db.Review.findByPk(reviewId);


  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {

    editedReview.review = review;
    editedReview.rating = rating;

    await editedReview.save();

    return res.redirect(`/apis/${api_id}`);
  } else {
    const api = await db.Api.findByPk(api_id);
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("reviews", { title:"AceAPI Submit Review", csrfToken: req.csrfToken(), api, errors, editedReview })
  }


}));

router.delete('/:id(\\d+)', asyncHandler(async (req,res,next) => {
    const findReview = await db.Review.findByPk(req.params.id);
    if (findReview) {
        const review = await findReview.destroy();
        res.status(204).end();
      } else {
        next();
      }
}))

module.exports = router;
