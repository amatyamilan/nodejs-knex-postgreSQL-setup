const express = require('express');
const router = express.Router();

router.use("/users", require("../modules/user/user.route"));
router.use("/prefences", require("../modules/user-preference/user-preference.route"));

module.exports = router;
