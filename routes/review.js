const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const { csrfProtection, asyncHandler } = require('../utils');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

router.get('/', csrfProtection, asyncHandler(async (req,res,next) => {
    const { userId } = req.session.auth;
    if(userId){
        res.render('reviews', { title:"AceAPI Submit Review", csrftoken = req.csrfToken() })
    } else {
        return res.render('login')
    }
}));

router.post('/', asyncHandler(async (req,res,next) => {
    const { review, rating } = req.body;
    const newReview = await review.create({
        review,
        rating
    });
    res.render('api/:id')
}))
