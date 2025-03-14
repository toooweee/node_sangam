require("dotenv").config();
const connectToDB = require("./database/db.js");
const express = require("express");
const todoRoutes = require("./routes/todo.routes.js");

const requestsLogger = require("./middleware/requests.logger.middleware.js");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDB();

  app.use(express.json());
  app.use(requestsLogger);

  app.use("/api", todoRoutes);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
