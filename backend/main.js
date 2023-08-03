const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL, {
  dbName: "koov-clothing",
});

module.exports = { connection };
