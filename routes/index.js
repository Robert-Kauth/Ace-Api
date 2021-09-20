const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const userValidators = [
  check('first_name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('last_name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('password_confirm')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/login', csrfProtection, userValidators, async(req, res, next) => {
  const user = db.User.build();
  res.render('login', { title: "Ace API - Login", user, csrfToken: req.csrfToken() });
});

router.get('/signup', csrfProtection, async(req, res, next) => {
  const user = db.User.build();
  res.render('signup', { title: "Ace API - Sign Up", user, csrfToken: req.csrfToken()  });
});

router.post('/signup', csrfProtection, userValidators, asyncHandler (async(req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
  } = req.body;

  const validatorErrors = validationResult(req);

  const user = db.User.build({
    first_name,
    last_name,
    email
  });

  if (validatorErrors.isEmpty()) {
    const hashed_password = await bcrypt.hash(password, 10);
    user.hashed_password = hashed_password;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/');

  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signup', { title: "Ace API - Sign Up", user, csrfToken: req.csrfToken(), errors});
  }

}));

module.exports = router;
