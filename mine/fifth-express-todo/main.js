require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
