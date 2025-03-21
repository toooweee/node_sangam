const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const databaseURL = process.env.DATABASE_URL;

  try {
    await mongoose.connect(databaseURL);
    console.log("Database is ready for work");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
