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
    console.log("INSIDE USERS/")
		const { userId } = req.session.auth;
		const userToolboxes = await Toolbox.findAll({ where: { user_id: userId } });
    const apis = await Api.findAll({ order: [['rating', 'DESC']]});

		res.render('home', {
      title: 'All APIs',
      userToolboxes,
      userId,
      apis
    });
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

// router.get("/:id",
//  requireAuth,
//   csrfProtection,
//    asyncHandler(async (req, res, next) => {

//     if(req.session.auth) {
//     const user_id = req.session.auth.userId
//     const toolboxes = await Toolbox.findAll({
//         where: {
//             user_id: user_id,
//         },
//         include: {
//             model: Api,
//             include: Tag
//         }
//     })

//     res.render("my_toolboxes", {
//       title: "Ace API - My Toolboxes",
//       csrfToken: req.csrfToken(),
//       toolboxes
//     });
//     } else {
//         res.redirect('/login', {csrfToken: req.csrfToken()});
//     }

//   }));

module.exports = router;
