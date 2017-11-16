const mongoose = require("mongoose");
const { Schema } = mongoose;

const spotSchema = new Schema({
  name: String,
  lat: String,
  lon: String,
  cc: String,
  region: String,
});

mongoose.model("spots", spotSchema)
