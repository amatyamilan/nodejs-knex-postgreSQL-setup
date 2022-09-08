const { check } = require("express-validator");

const getUserRules = () => {
  return [check("userId").notEmpty().withMessage("User id is required.")];
};

const preferenceIdRules = () => {
  return [
    check("prefeId").notEmpty().withMessage("Preference id is required."),
  ];
};

module.exports = {
  getUserRules,
  preferenceIdRules,
};
