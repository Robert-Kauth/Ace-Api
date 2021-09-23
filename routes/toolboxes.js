const express = require("express");
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const { User, Toolbox, Implementation, Api, Tag, Review } = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require("../auth");

const router = express.Router();


const toolboxValidators = [
  check("new_toolbox")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Toolbox Name")
];


router.get(
  "/",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {

    console.log("INSIDE toolboxes/ ROUTER");

    if (req.session.auth) {
      const user_id = req.session.auth.userId;
      const toolboxes = await Toolbox.findAll({
        where: {
          user_id: user_id,
        },
        include: {
          model: Api,
          include: [Tag, Review]
        },
      });

      res.render("my_toolboxes", {
        title: "Ace API - My Toolboxes",
        csrfToken: req.csrfToken(),
        toolboxes,
      });
    } else {
      res.redirect("/login", { csrfToken: req.csrfToken() });
    }
  })
);

router.get(
  "/:toolboxId(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    console.log("INSIDE toolboxes/:toolboxId ROUTER");

    if (req.session.auth) {

      const { userId } = req.session.auth;
      const toolbox = await Toolbox.findByPk(req.params.toolboxId, {
        where: { user_id: req.session.auth.userId },
        include: {
          model: Api,
          include: [Tag, Review]
        },
      });

      const toolboxes = await Toolbox.findAll({ where: { user_id: userId } });

      res.render("toolbox", {
        csrfToken: req.csrfToken(),
        toolbox,
        toolboxes,
      });
    } else {
      res.redirect("/login", { csrfToken: req.csrfToken() });
    }
  })
);

router.get("/create-toolbox",
 requireAuth,
  csrfProtection,
   asyncHandler(async (req, res, next) => {

    res.render("create-toolbox", {
      title: "Ace API - Create Toolbox",
      csrfToken: req.csrfToken(),
    });

  }));

router.post("/create-toolbox",
  requireAuth,
  csrfProtection,
  toolboxValidators,
  asyncHandler(async (req, res, next) => {


    const validatorErrors = validationResult(req);

    console.log("INSIDE post /toolboxes/create-toolbox")
    try {

      const { implementation } = req.body
      const user_id = req.session.auth.userId
      const toolbox = await toolBuilder(user_id, implementation)
      res.redirect("/toolboxes");
      // next()

      
    } catch (err) {
      next(err)
    }

  }));

module.exports = router;
