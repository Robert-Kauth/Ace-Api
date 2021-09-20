const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/login', csrfProtection, async(req, res, next) => {
  res.render('login', { csrfToken: req.csrfToken() });
});

router.get('/signup', csrfProtection, async(req, res, next) => {
  res.render('signup', { csrfToken: req.csrfToken()  });
});

module.exports = router;
