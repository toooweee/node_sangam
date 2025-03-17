require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const authRouter = require("./routes/auth.js");
const errorHandler = require("./utils/error.handler.js");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());

  app.use("/api/auth", authRouter);
  app.use(errorHandler);

  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}`);
}

main();
