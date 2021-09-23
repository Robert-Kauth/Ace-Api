const express = require("express");
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const { User, Toolbox, Implementation, Api, Tag } = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require("../auth");

const router = express.Router();

// GET all toolboxes

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
          include: Tag,
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
  "/:toolboxId",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    console.log("INSIDE toolboxes/:toolboxId ROUTER");

    if (req.session.auth) {

      const { userId } = req.session.auth;
      const toolbox = await Toolbox.findByPk(req.params.toolboxId, {
        where: { user_id: req.session.auth.userId },
        include: {
          model: Api,
          include: Tag,
        },
      });

      const toolboxes = await Toolbox.findAll({ where: { user_id: userId } });

      res.render("toolbox", {
        toolbox,
        toolboxes,
      });
    } else {
      res.redirect("/login", { csrfToken: req.csrfToken() });
    }
  })
);

module.exports = router;
