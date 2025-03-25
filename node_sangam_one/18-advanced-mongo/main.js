import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDatabase from "./config/database.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import productRoutes from "./routes/products.router.js";

async function main() {
  const app = express();
  const port = process.env.PORT || 5000;

  await connectToDatabase();

  app.use(express.json());

  app.use("/api", productRoutes);

  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

main();
