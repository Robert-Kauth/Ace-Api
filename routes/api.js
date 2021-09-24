const express = require('express');
const db = require('../db/models');

const { csrfProtection, asyncHandler, reviewAvgRating } = require('../utils');
const Sequelize = require("sequelize");
const { requireAuth } = require('../auth');
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {

    const api_id = req.params.id;

    const api = await db.Api.findByPk(api_id, {include: { model: db.Tag }});

    let toolboxes;

    let user_id;
    if(req.session.auth) {
        user_id = req.session.auth.userId

        toolboxes = await db.Toolbox.findAll({
            where: {
                user_id
            },
            include: db.Api
        })
    } else {
        toolboxes = [];
    }

    let inToolbox = false;
    let toolboxId;
    let toolboxName;

    for (const box of toolboxes) {
        if (!inToolbox) {
            const apis = box.Apis
            for (const api of apis) {
                if (!inToolbox) {
                    if (api.id === Number(api_id)) {
                        inToolbox = true;
                        toolboxId = box.id
                        toolboxName = box.name;
                        break;
                    }
                }
            }
        }
    }

    const toolboxInfo = {inToolbox, toolboxId, toolboxName}

    const reviews = await db.Review.findAll({
        where: {
            api_id
        },
        order: [["updatedAt", "DESC"]],
        include: { model: db.User }
    })

    const avgNumber = await reviewAvgRating(api_id);

    if (api) {
        return res.render('api', {title: `Ace API - ${api.name}`, api, toolboxes, avgRating: avgNumber, reviews, user_id, toolboxInfo})
    } else {
        next()
    }
}))


router.get('/:id(\\d+)/create_review', requireAuth, csrfProtection, asyncHandler( async (req,res,next) => {
    const api = await db.Api.findByPk(req.params.id)
    let user_id = req.session.auth
    if(user_id){
        res.render('reviews', { title:"Ace API - Submit Review", csrfToken: req.csrfToken(), api })
    } else {
        return res.render('login')
    }
}))


module.exports = router;
