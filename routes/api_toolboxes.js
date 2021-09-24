const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler, toolBuilder } = require("../utils");
const {
  User,
  Toolbox,
  Implementation,
  Api,
  Tag,
  Review,
} = require("../db/models");
const { restoreUser, requireAuth, authorize } = require("../auth");




router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res, next) => {

        const { new_toolbox } = req.body

        try {
            const toolbox = await Toolbox.update({
                name: new_toolbox,
            }, {
                where: {
                  id: toolbox_id,
                }
            });
            res.json(toolbox);
        } catch (e) {
            next(e)
        }

    }));


router.patch(
    "/",
    requireAuth,
    asyncHandler(async (req, res, next) => {

        const { toolbox_id, new_name } = req.body

        try {
            const toolbox = await Toolbox.update(
            {
            name: new_name,
            },            {
                where: {
                    id: toolbox_id,
                }
        });
        res.json(toolbox);
    } catch (e) {
        next(e)
    }

}));

router.delete(
    "/",
    requireAuth,
    asyncHandler(async (req, res, next) => {
        const { toolbox_id } = req.body
        const user_id = req.session.auth.userId
        try {
            const find_toolbox = await Toolbox.findByPk(toolbox_id);
            find_toolbox.destroy();
            res.status(204).end();
        } catch (e) {
            next(e)
        }

    }));


module.exports = router;
