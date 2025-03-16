require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}`);
}

main();
