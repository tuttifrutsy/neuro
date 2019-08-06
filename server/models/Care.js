const mongoose = require('mongoose');
const Schema = mongoose.Schema

const careSchema = new Schema({
  title: String,
  description: String,
  recomendations: [String],
},
{
  timestamps: true
})

const Care = mongoose.model("Care", careSchema);
module.exports = Care;