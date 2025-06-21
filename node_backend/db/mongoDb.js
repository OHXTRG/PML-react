const mongoose = require("mongoose");

const connectMongoDb = async (uri) => {
  return mongoose.connect(uri);
};

module.exports = { connectMongoDb };
