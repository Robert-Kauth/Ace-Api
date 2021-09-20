const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const bcrypt = require('bcryptjs');

const router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/login', csrfProtection, async(req, res, next) => {
  const user = db.User.build();
  res.render('login', { title: "Ace API - Login", user, csrfToken: req.csrfToken() });
});

router.get('/signup', csrfProtection, async(req, res, next) => {
  const user = db.User.build();
  res.render('signup', { title: "Ace API - Sign Up", user, csrfToken: req.csrfToken()  });
});

router.post('/signup', csrfProtection, asyncHandler (async(req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
  } = req.body;

  const hashed_password = await bcrypt.hash(password, 10);

  const user = await db.User.create({
    first_name,
    last_name,
    email,
    hashed_password
  });

  res.redirect('/');
}));

module.exports = router;
