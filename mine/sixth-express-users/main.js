import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDatabase from "./config/database.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import userRoutes from "./routes/user.js";
import avatarRoutes from "./routes/avatar.js";

const main = async () => {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());

  app.use("/api/user", userRoutes);
  app.use("/api/avatar", avatarRoutes);

  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`🚀 Server is listening at http://localhost:${port}`);
  });
};

main();
