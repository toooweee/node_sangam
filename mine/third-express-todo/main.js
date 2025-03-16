require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database.js");
const userRouter = require("./routes/user.js");
const { errorHandler } = require("./utils/errorHandler");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());
  app.use(errorHandler);

  app.use("/api", userRouter);

  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}`);
}

main();
