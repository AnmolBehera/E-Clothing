const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fname: String,
  lname: String,
  phoneno:Number,
  email: String,
  pass: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
