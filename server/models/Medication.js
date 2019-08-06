const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drugSchema = new Schema(
  {
    name: String,
    description: String,
    recomendations: [String]
  },
  {
    timestamps: true
  }
);

const Drug = mongoose.model("Care", drugSchema);
module.exports = Drug;
