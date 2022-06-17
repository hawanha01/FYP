const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email:String,
  password:String,
  tests:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Test'}
  ]
})
module.exports = mongoose.model("User",userSchema)

