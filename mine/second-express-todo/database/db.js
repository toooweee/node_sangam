const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is ready for use!");
  } catch (e) {
    throw new Error(`Unable to connect database ${e.message}`);
  }
}

module.exports = connectToDB;
