import { Router } from "express";
const router = Router();
import productController from "../controllers/product.controller.js";

router.get("/products", productController.getAllProducts);
router.get("/products/stats", productController.getProductStats);
router.get("/products/analysis", productController.getProductsAnalysis);
router.post("/products");
router.get("/products/:id");
router.put("/products/:id");
router.delete("/products/:id");

export default router;
