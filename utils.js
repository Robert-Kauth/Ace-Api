const csrf = require('csurf');
const db = require('./db/models');

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
  const toolbox = await Toolbox.build({
    user_id = id,
    name = title,
    createdAt = new Date(),
    updatedAt = new Date()
  })
  return toolbox;
}

module.exports = {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
    toolBuilder
}
