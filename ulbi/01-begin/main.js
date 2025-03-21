import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./database/database.js";
import router from "./router.js";
import fileUpload from "express-fileupload";

async function main() {
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());
  app.use(express.static("uploads"));
  app.use(fileUpload({}));

  app.use("/api", router);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
