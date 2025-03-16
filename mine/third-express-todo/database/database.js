const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const databaseURL = process.env.MONGO_URL;
    await mongoose.connect(databaseURL);
    console.log("Database is successfully connected and ready for work");
  } catch (err) {
    throw new Error("Unable to connect to Database");
  }
}

module.exports = connectToDatabase;
