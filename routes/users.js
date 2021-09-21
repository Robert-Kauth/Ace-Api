const express = require('express');

const { User, Toolbox, Implementation, Api } = require('../db/models');
const { asyncHandler } = require('../utils');
const { restoreUser, requireAuth, authorize } = require('../auth');

const router = express.Router();

/* GET users home page. */
router.get(
	'/',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { userId } = req.session.auth;
		const toolboxes = await Toolbox.findAll({ where: { user_id: userId } });
		res.render('home', { title: 'ACEAPI', toolboxes });
	})
);

module.exports = router;
