const express = require('express');
const db = require('../db/models');

const { searchApis, csrfProtection, asyncHandler, reviewAvgRating } = require('../utils');
const Sequelize = require("sequelize");
const {Op} = require("sequelize")
const { requireAuth } = require('../auth');
const router = express.Router();


router.get('/', async (req, res) => {
    let apis;
    const toolboxes = await db.Toolbox.findAll({
      where: { id: { [Op.lt]: 4 } }
     });
    try {
      apis = await searchApis(`${req.query.box}`);
    } catch (e) {
      console.error(e);
      error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
    res.render('search',{
        toolboxes,
        apis,
        title: "Search Results"
    });
});


module.exports = router;
