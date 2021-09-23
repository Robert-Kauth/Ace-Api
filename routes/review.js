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

  //TODO- render the page only if the Reviews User ID is equal to the logged in user


  //Render the page if it exists
  if (review) {
    // res.render('review', {title: `Ace API - ${api.name}`, api, toolboxes, avgRating: avgNumber, reviews, user_id})
    res.send(review)
} else {
    next()
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
