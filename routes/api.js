const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
    //Grab the apiId
    const api_id = req.params.id;

    //Search for the specific API
    const api = await db.Api.findByPk(api_id, {include: { model: db.Tag }});

    //TODO Run a query to find the APIs average rating

    //Get the logged in user, if they exist
    const user_id = req.session.auth.userId;

    //Get the user's toolboxes
    const toolboxes = await db.Toolbox.findAll({
        where: {
            user_id
        }
    })

    //Render the page if it exists
    //TODO Replace avgRating with actual score
    if (api) {
        return res.render('api', {title: `Ace API - ${api.name}`, api, toolboxes, avgRating: 5})
        // res.send(api)
    } else {
        next()
    }
}))


module.exports = router;
