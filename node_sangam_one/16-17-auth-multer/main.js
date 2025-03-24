require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const authRouter = require("./routes/auth.js");
const homeRouter = require("./routes/home.js");
const adminRouter = require("./routes/admin.js");
const uploadRouter = require("./routes/image.js");
const errorMiddleware = require("./middleware/error.middleware");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());

  app.use("/api/auth", authRouter);
  app.use("/api/home", homeRouter);
  app.use("/api/admin", adminRouter);
  app.use("/api", uploadRouter);
  app.use(errorMiddleware);

  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}`);
}

main();
