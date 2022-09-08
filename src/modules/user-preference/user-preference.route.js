const express = require("express");
const { validateBody } = require("../../middleware/validator.middleware");
const router = express.Router();
const UserPreferences = require("./user-preference.controller");
const {
  getUserRules,
  preferenceIdRules,
} = require("./user-preference.validator");

router.post("/create", UserPreferences.create);
router.get(
  "/",
  getUserRules(),
  validateBody,
  UserPreferences.getUsersPreferences
);
router.put("/edit", getUserRules(), validateBody, UserPreferences.edit);
router.delete(
  "/delete",
  preferenceIdRules(),
  validateBody,
  UserPreferences.destroy
);

module.exports = router;
