const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const { csrfProtection, asyncHandler } = require('../utils');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

router.post('/', csrfProtection, asyncHandler(async (req,res,next) => {
    const { api_id, review, rating } = req.body;
    const { userId } = req.session.auth;
    const newReview = await db.Review.create({
        api_id,
        user_id:userId,
        review,
        rating
    });
    res.redirect(`/apis/${api_id}`)
}))

router.get(`/:id(\\d+)/update`, requireAuth, asyncHandler( async (req, res, next) => {
  const reviewId = req.params.id;
  const review = await db.Review.findByPk(reviewId, {include: { model: db.Api }});

  if (review) {
    //Check if the review owner is the same as the logged in user
    //Redirect to home page if not
      if (review.user_id === req.session.auth.userId) {
        res.render('edit_reviews', {title: "Ace API - Edit Review", review})
      } else {
        res.redirect("/")
      }
  } else {
    res.next();
  }
}));

router.post(`/:id(\\d+)/update`, requireAuth, asyncHandler( async (req, res, next) => {
  const { api_id, review, rating } = req.body;
  // console.log("************", rating);
  // console.log("************", review);

  const reviewId = req.params.id;
  const editedReview = await db.Review.findByPk(reviewId);

  editedReview.review = review;
  editedReview.rating = rating;

  await editedReview.save();

  res.redirect(`/apis/${api_id}`);

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
