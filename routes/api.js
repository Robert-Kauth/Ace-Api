const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');

const Sequelize = require("sequelize");
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
            }
        })
    } else {
        toolboxes = [];
    }

    //Get the reviews for the API
    const reviews = await db.Review.findAll({
        where: {
            api_id
        },
        include: { model: db.User }
    })

    //Get the Average Rating- sum of ratings / count
    //Get count
    let review_avg = await db.Review.findAll({
        where: {
            api_id
        },
        attributes: [
            [Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating'],
          ],
    })
    // console.log("**************")
    review_avg = review_avg[0]
    review_avg = JSON.stringify(review_avg)
    review_avg = JSON.parse(review_avg)

    //Trim decimals
    const avgNumber = parseFloat(review_avg.avgRating).toFixed(1)

    //Render the page if it exists
    if (api) {
        return res.render('api', {title: `Ace API - ${api.name}`, api, toolboxes, avgRating: avgNumber, reviews, user_id})
        // res.send(rounded)
    } else {
        next()
    }
}))

router.get('/:id(\\d+)/create_reviews', csrfProtection, asyncHandler( async (req,res,next) => {
    const api = await db.Api.findByPk(req.params.id)
    let user_id = req.session.auth
    if(user_id){
        console.log(api.id)
        res.render('reviews', { title:"AceAPI Submit Review", csrfToken: req.csrfToken(), api })
    } else {
        return res.render('login')
    }
}))


module.exports = router;
