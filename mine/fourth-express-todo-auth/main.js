require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const authRoutes = require("./routes/auth.js");
const todoRoutes = require("./routes/todo.js");
const errorHandler = require("./utils/errorHandler.js");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());

  app.use("/api/auth", authRoutes);
  app.use("/api", todoRoutes);
  app.use(errorHandler);

  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}`);
}

main();
