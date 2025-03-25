import productsRepository from "../models/product.js";

class ProductService {
  findAll = async () => {
    return productsRepository.find({});
  };

  findStats = async (inStock, price) => {
    return productsRepository.aggregate([
      {
        $match: {
          inStock: inStock,
          price: {
            $gte: price,
          },
        },
      },
      // group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
  };

  analys = async () => {
    return productsRepository.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
    ]);
  };
}

export default new ProductService();
