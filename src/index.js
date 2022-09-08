require("dotenv").config();

const express = require('express');
const app = express();
const routes=require('./routes/main.route')
app.use(express.json())


// Initialize routes
app.use(routes);

// For undefined routes
app.use("*", (req, res) => {
  res.status(400).json({
    msg: "No such route found",
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening at port ${process.env.APP_PORT}`)
})