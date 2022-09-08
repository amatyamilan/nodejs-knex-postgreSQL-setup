const express = require('express');
const router = express.Router();

router.use("/api", require("./api-public.routes"));

router.get('/', (req,res) => {

   res.send("API is running").status(200)
})

module.exports = router;