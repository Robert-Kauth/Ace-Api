const express = require("express");
const router = express.Router();
const { restoreUser, requireAuth } = require("../auth.js");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("../utils");

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
