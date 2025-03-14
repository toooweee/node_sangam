const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
  } catch (e) {
    console.log("Connection to DB is FAILED");
    process.exit(1);
  }
};

module.exports = connectToDB;
