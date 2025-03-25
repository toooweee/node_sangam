import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "../config/database.js";
import productRepository from "../models/product.js";

const productsSample = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 999,
    inStock: true,
    tags: ["computer", "tech"],
  },
  {
    name: "Smartphone",
    category: "Electronics",
    price: 699,
    inStock: true,
    tags: ["mobile", "tech"],
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 199,
    inStock: false,
    tags: ["audio", "tech"],
  },
  {
    name: "Running Shoes",
    category: "Sports",
    price: 89,
    inStock: true,
    tags: ["footwear", "running"],
  },
  {
    name: "Novel",
    category: "Books",
    price: 15,
    inStock: true,
    tags: ["fiction", "bestseller"],
  },
];

const seedProducts = async () => {
  await connectToDatabase();

  try {
    const isProductsExist = await productRepository.countDocuments();

    if (isProductsExist > 2) {
      console.log("Products already exists");
      process.exit(0);
    }
    await productRepository.insertMany(productsSample);
    process.exit(1);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

seedProducts().then(() => {
  console.log("Products added successfully.");
});
