import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  price: Number,
  inStock: Boolean,
  tags: [String],
});

export default mongoose.model("Product", productSchema);
