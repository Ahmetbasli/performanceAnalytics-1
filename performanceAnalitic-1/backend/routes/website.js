const express = require("express");
const websiteService = require("../services/website-service");
const router = express.Router();

router.get("/all", async (req, res) => {
  const website = await websiteService.findAll();
  res.send(website);
});
// getting analitics data
router.post("/", async (req, res) => {
  console.log("save ana");
  const website = await websiteService.add(req.body);
  res.send(website);
});

router.get("/", async (req, res) => {
  res.send("fjksjf");
});

module.exports = router;
