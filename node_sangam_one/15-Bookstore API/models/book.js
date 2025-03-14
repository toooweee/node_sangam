const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: 100,
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    trim: true,
    maxLength: 100,
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    max: [new Date().getFullYear(), "Year cant be in the future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);
