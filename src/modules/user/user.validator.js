const { check } = require("express-validator");

const coordinateRules = () => {
  return [
    check(["lng", "lat"])
      .trim()
      .notEmpty()
      .isNumeric()
      .withMessage("Coordinates must be a number and not empty"),
  ];
};

module.exports = {
  coordinateRules,
};
