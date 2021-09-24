const express = require("express");
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const {
  User,
  Toolbox,
  Implementation,
  Api,
  Tag,
  Review,
} = require("../db/models");
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require("../auth");

const router = express.Router();

const toolboxValidators = [
  check("implementation")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a name")
    .custom((value) => {
      return Toolbox.findOne({ where: { name: value } }).then((toolbox) => {
        if (toolbox) {
          return Promise.reject("Toolbox already exists");
        }
      });
    }),
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
          include: [Tag, Review],
        },
        order: [["id"]],
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
          include: [Tag, Review],
        },
        order: [["id"]],
      });

      const apis = await Api.findAll({
        include: [Tag, Review],
      });

      const toolboxes = await Toolbox.findAll({ where: { user_id: userId } });

      if (toolbox.user_id === req.session.auth.userId) {
        console.log("TOOLBOX ID:", toolbox.id);
        res.render("toolbox", {
          csrfToken: req.csrfToken(),
          toolbox,
          toolboxes,
        });
      } else {
        const deny_access = true;
        res.render("home", {
          title: "Ace API - My Toolboxes",
          csrfToken: req.csrfToken(),
          toolboxes,
          apis,
          deny_access,
        });
      }
    } else {
      res.redirect("/login", { csrfToken: req.csrfToken() });
    }
  })
);

router.get(
  "/create-toolbox",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("create-toolbox", {
      title: "Ace API - Create Toolbox",
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/create-toolbox",
  requireAuth,
  csrfProtection,
  toolboxValidators,
  asyncHandler(async (req, res, next) => {
    console.log("INSIDE post /toolboxes/create-toolbox");

    const validatorErrors = validationResult(req);
    const user_id = req.session.auth.userId;

    try {
      if (validatorErrors.isEmpty()) {
        const { implementation } = req.body;
        const toolbox = await toolBuilder(user_id, implementation);
        res.redirect("/toolboxes");
      } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render("create-toolbox", {
          title: "Ace API - Create Toolbox",
          csrfToken: req.csrfToken(),
          errors,
        });
      }
    } catch (err) {
      next(err);
    }
  })
);


module.exports = router;
