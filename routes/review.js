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
    // const { review, rating } = req.body;
    // console.log(req.body)
    // const { userId } = req.session.auth;
    // const api_id = req.params.id;
    // console.log(userId)
    // console.log(api_id)
    // const newReview = await Review.create({
    //     // api_id,
    //     // user_id:userId,
    //     review,
    //     rating
    // });
    res.redirect('/apis')
}))



module.exports = router;
