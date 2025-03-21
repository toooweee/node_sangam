import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const databaseURL = process.env.DATABASE_URL;
    await mongoose.connect(databaseURL);
    console.log("Database is ready for work");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
