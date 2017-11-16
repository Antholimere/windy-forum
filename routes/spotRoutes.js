const mongoose = require("mongoose");
const Spot = mongoose.model("spots");
const keys = require("../config/keys");

module.exports = app => {
  app.post("/api/spot", async (req, res) => {
    const spot = new Spot({
      name: req.body.name,
      lat: req.body.lat,
      lon: req.body.lon,
      cc: req.body.cc,
      region: req.body.region
    });
    const newSpot = await spot.save()
    res.send(newSpot)
  })
}
