import dotenv from "dotenv";
dotenv.config();
import express from "express";

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
