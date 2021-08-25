const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  ttfb: Number,
  fcp: Number,
  domload: Number,
  windowLoad: Number,
  resourceLoadTimes: [
    {
      name: String,
      duration: Number,
      transferSize: Number,
      initiatorType: String,
    },
  ],
  origin: String,
  url: String,
});

const WebsiteModel = mongoose.model("Website", WebsiteSchema);

module.exports = WebsiteModel;
