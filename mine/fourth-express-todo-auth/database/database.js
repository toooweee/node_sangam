const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const databaseURL = process.env.DATABASE_URL;
    await mongoose.connect(databaseURL);
    console.log("Database is ready for connections");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
