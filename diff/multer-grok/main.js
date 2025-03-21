import dotenv from "dotenv";
import express from "express";
import connectToDatabase from "./config/database.js";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

async function main() {
  const app = express();

  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());
  app.use(
    "/uploads",
    express.static(path.join(import.meta.dirname, "uploads")),
  );

  app.use("/api/users", userRoutes);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
