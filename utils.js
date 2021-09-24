const csrf = require('csurf');
const db = require('./db/models');
const Sequelize = require("sequelize");
const {Op} = require("sequelize")
const {
  User,
  Toolbox,
  Implementation,
  Api,
  Tag,
  Review,
} = require("./db/models");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req,res,next) => handler(req,res,next).catch(next)

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);

      const err = Error("Bad request.");
      err.errors = errors;
      err.status = 400;
      err.title = "Bad request.";
      return next(err);
    }
    next();
};

const toolBuilder = async (id, title) => {
  const toolbox = await db.Toolbox.create({
    user_id:id,
    name:title,
  })
  return toolbox;
}

const reviewAvgRating = async (api_id) => {
  let review_avg = await db.Review.findAll({
    where: {
        api_id
    },
    attributes: [
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating'],
      ],
  })

  review_avg = review_avg[0]
  review_avg = JSON.stringify(review_avg)
  review_avg = JSON.parse(review_avg)

  //Trim decimals
  const avgNumber = parseFloat(review_avg.avgRating).toFixed(1)

  return avgNumber;
}

async function searchApis(box) {
  const results = await Api.findAll({
    where: {
      description: {
        [Op.iLike]:`%${box}%`
      }
    },
    include: {
      model: Tag,
    },
  })
  return results;
}

module.exports = {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
    toolBuilder,
    reviewAvgRating,
    searchApis
}
