require("dotenv").config();
const cors = require("cors");
const websiteRouter = require("./routes/website");
const analyticsDataRouter = require("./routes/analyticsData");
const express = require("express");

require("./mongo-connection");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", express.static("./public"));

app.use("/website", websiteRouter);
app.use("/analyticsData", analyticsDataRouter);

app.get("/", (req, res) => {
  res.render("index.html");
});

module.exports = app;
