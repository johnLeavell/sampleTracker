const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const connectDB = require("./config/config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

connectDB();

// userRoutes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users/", userRoutes);
//sampleRoutes
const sampleRoutes = require("./routes/sampleRoutes");
app.use("/api/samples/", sampleRoutes);

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
