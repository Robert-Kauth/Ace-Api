const express = require('express');

const { User } = require('../db/models');
const { asyncHandler } = require('../utils');
const { restoreUser, requireAuth, authorize } = require('../auth');

const router = express.Router();

/* GET users home page. */
router.get(
	'/:id(\\d+)',
	requireAuth,
	authorize,
	asyncHandler(async (req, res, next) => {
		const user = await User.findByPk(req.params.id);
		if (user) {
			res.render('home', { title: 'ACEAPI' });
		} else {
      next()
    }
	})
);

module.exports = router;
