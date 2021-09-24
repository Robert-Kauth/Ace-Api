const express = require('express');
const db = require('../db/models');

const { csrfProtection, asyncHandler, reviewAvgRating } = require('../utils');
const Sequelize = require("sequelize");
const { requireAuth } = require('../auth');
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
    //Grab the apiId
    const api_id = req.params.id;

    //Search for the specific API
    const api = await db.Api.findByPk(api_id, {include: { model: db.Tag }});

    //Get the logged in user, if they exist
    //Else just create an empty array to pass into the render
    let toolboxes;

    let user_id;
    if(req.session.auth) {
        user_id = req.session.auth.userId

        //Get the user's toolboxes
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
    //Search through the users toolboxes
    //Find if the api is already in a toolbox
    //If so, we pass that to pug to render an update form
    //Instead of an add form

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

    //Get the reviews for the API
    const reviews = await db.Review.findAll({
        where: {
            api_id
        },
        order: [["updatedAt", "DESC"]],
        include: { model: db.User }
    })

    //Get the Average Rating
    const avgNumber = await reviewAvgRating(api_id);

    //Render the page if it exists
    if (api) {
        return res.render('api', {title: `Ace API - ${api.name}`, api, toolboxes, avgRating: avgNumber, reviews, user_id, toolboxInfo})
        // res.send(toolboxes)
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
