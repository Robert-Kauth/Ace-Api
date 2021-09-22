const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const { csrfProtection, asyncHandler } = require('../utils');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

// router.get('/', csrfProtection, asyncHandler(async (req,res,next) => {
//     const { userId } = req.session.auth;
//     if(userId){
//         res.render('reviews', { title:"AceAPI Submit Review", csrfToken: req.csrfToken() })
//     } else {
//         return res.render('login')
//     }
// }));

router.post('/', csrfProtection, asyncHandler(async (req,res,next) => {
    const { api_id, review, rating } = req.body;
    const { userId } = req.session.auth;
    const newReview = await db.Review.create({
        api_id,
        user_id:userId,
        review,
        rating
    });
    res.redirect('/')
}))



module.exports = router;
