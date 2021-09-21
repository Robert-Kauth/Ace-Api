
const express = require('express');

const { User, Toolbox, Implementation, Api } = require('../db/models');
const { restoreUser, requireAuth, authorize } = require('../auth');
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("../utils");


/* GET users home page. */
router.get(
	'/',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { userId } = req.session.auth;
		const toolboxes = await Toolbox.findAll({ where: { user_id: userId } });
		res.render('home', { title: 'ACEAPI', toolboxes });
	}))

/* GET users listing. */
router.get(
  "/:toolboxId",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const toolbox = await db.Toolbox.findByPk(req.params.toolboxId,{
      where: {user_id: req.session.auth.userId},
      include: {
        model: db.Api,
      },
    });
    res.render("toolbox", {toolbox})
  })
);

module.exports = router;
