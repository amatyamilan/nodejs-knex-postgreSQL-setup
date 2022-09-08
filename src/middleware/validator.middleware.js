const { validationResult } = require("express-validator");

const validateBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array({ onlyFirstError: true }).map((err) => {
        return {
          message: err.msg,
        };
      }),
    });
  }
  next();
};

module.exports = {
  validateBody,
};
