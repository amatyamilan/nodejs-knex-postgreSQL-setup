const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");
const { coordinateRules } = require("./user.validator");
const { validateBody } = require("../../middleware/validator.middleware");

router.get("/recently-logged-in", UserController.getRecentLoggedInUsers);
router.get("/recently-registered", UserController.getRecentRegisteredUsers);
router.post(
  "/nearby",
  coordinateRules(),
  validateBody,
  UserController.getNearbyUsers
);
router.post("/search", UserController.searchUsers);

module.exports = router;
