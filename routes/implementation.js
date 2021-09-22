const express = require("express");
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const { User, Toolbox, Implementation, Api } = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require('../auth');

const router = express.Router();



router.get("/",
 requireAuth,
  csrfProtection,
   asyncHandler(async (req, res, next) => {

    res.render("create-toolbox", {
      title: "Ace API - Create Toolbox",
      csrfToken: req.csrfToken(),
    });

  }));


router.post("/",
 requireAuth,
  csrfProtection,
   asyncHandler(async (req, res, next) => {

    const { implementation } = req.body
    const user_id = req.session.auth.userId
    const toolbox = await toolBuilder(user_id, implementation)

    console.log("inside create toolbox post, toolbox: ", toolbox.toJSON())

    res.redirect(`/toolboxes/${toolbox.id}`, {
      title: `Ace API - ${toolbox.name}`,
    });

  }));

module.exports = router;
