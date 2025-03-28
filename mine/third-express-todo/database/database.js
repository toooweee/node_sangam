const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const databaseURL = process.env.MONGO_URL;
    await mongoose.connect(databaseURL);
    console.log("Database is ready for connections");
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = connectToDatabase;
