const mongoose = require("mongoose");

const AnalyticsDataSchema = new mongoose.Schema({
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
});

const AnalyticsDataModel = mongoose.model("AnalyticsData", AnalyticsDataSchema);

module.exports = AnalyticsDataModel;
