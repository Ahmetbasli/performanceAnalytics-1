const express = require("express");
const {
  addNewAnalyticsData,
  findOneByUrl,
} = require("../services/website-service");
const websiteService = require("../services/website-service");
const router = express.Router();

router.get("/all", async (req, res) => {
  await websiteService.del("61281e57779caae391135805");

  const website = await websiteService.findAll();
  res.send(website);
});
// getting analitics data

router.post("/", async (req, res) => {
  const { data, origin, url } = req.body;

  const website = await websiteService.findOneByUrl(url);

  if (!website)
    await websiteService.add({ analyticsDatas: [data], origin, url });
  else await websiteService.addNewAnalyticsData(website, data);

  res.send(req.body);
});

router.get("/", async (req, res) => {
  //console.log(boolean);
  res.send("fjksjf");
});

module.exports = router;
