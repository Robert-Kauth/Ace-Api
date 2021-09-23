const express = require("express");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const { User, Toolbox, Implementation, Api } = require("../db/models");
const db = require('../db/models');
const { loginUser, logoutUser } = require("../auth");
const { restoreUser, requireAuth, authorize } = require('../auth');


const router = express.Router();

router.post("/", asyncHandler(async (req, res, next) => {
    const { api_id, toolbox_id } = req.body;
    const impStatus = await db.Implementation.create( {
      api_id, toolbox_id
    })

    res.json({ impStatus })
  })
);

module.exports = router;
