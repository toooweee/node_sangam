require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const exceptionHandler = require("./middleware/exception.handler");
const userRoutes = require("./routes/user.route.js");

async function main() {
  const port = process.env.PORT || 5000;
  const app = express();

  app.use(express.json());
  app.use(exceptionHandler);

  app.use("/api", userRoutes);

  await connectToDatabase();

  await app.listen(port);
  console.log(`Server is running at http://localhost:${port}`);
}

main();
