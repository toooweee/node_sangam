import express from "express";
import dotenv from "dotenv";
import ErrorMiddleware from "./middlewares/error.middleware.js";
import userRoutes from "./user/user.routes.js";
import avatarRoutes from "./avatar/avatar.routes.js";
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use("/api", userRoutes);
  app.use("/api", avatarRoutes);
  app.use(ErrorMiddleware);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
