const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
})
module.exports = mongoose.model("Test",testSchema)
