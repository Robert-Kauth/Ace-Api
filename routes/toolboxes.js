const express = require("express");
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const { User, Toolbox, Implementation, Api, Tag} = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require('../auth');

const router = express.Router();


// GET all toolboxes


router.get("/",
 requireAuth,
  csrfProtection,
   asyncHandler(async (req, res, next) => {

    if(req.session.auth) {
    const user_id = req.session.auth.userId
    const toolboxes = await Toolbox.findAll({
        where: {
            user_id: user_id,
        },
        include: {
            model: Api,
            include: Tag
        }
    })
    console.log(toolboxes)
    res.render("my_toolboxes", {
      title: "Ace API - My Toolboxes",
      csrfToken: req.csrfToken(),
      toolboxes
    });
    } else {
        res.redirect('/login', {csrfToken: req.csrfToken()});
    }

  }));

router.get("/:id",
 requireAuth,
  csrfProtection,
   asyncHandler(async (req, res, next) => {

    if(req.session.auth) {
    const user_id = req.session.auth.userId
    const toolboxes = await Toolbox.findAll({
        where: {
            user_id: user_id,
        },
        include: {
            model: Api,
            include: Tag
        }
    })
    console.log(toolboxes)
    res.render("my_toolboxes", {
      title: "Ace API - My Toolboxes",
      csrfToken: req.csrfToken(),
      toolboxes
    });
    } else {
        res.redirect('/login', {csrfToken: req.csrfToken()});
    }

  }));



module.exports = router;
