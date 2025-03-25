import ProductService from "../services/product.service.js";
import Product from "../models/product.js";

class ProductController {
  getAllProducts = async (req, res, next) => {
    try {
      const products = await ProductService.findAll();
      res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };

  getProductStats = async (req, res, next) => {
    try {
      const { inStock, price } = req.query;
      const products = await ProductService.findStats(Boolean(inStock), +price);
      res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };

  getProductsAnalysis = async (req, res, next) => {
    try {
      const products = await ProductService.analys();
      res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };
}

export default new ProductController();
