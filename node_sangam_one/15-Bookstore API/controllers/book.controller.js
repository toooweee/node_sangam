const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length > 0) {
      res.status(200).json(allBooks);
    } else {
      res.status(404).json({ message: "Books not found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newBookData = req.body;
    const newlyCreatedBook = await Book.create(newBookData);

    if (newlyCreatedBook) {
      res.status(200).json(newlyCreatedBook);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  const bookToDelete = await Book.findById(id);

  if (!bookToDelete) {
    return res.status(404).json({ message: "Book not found" });
  }

  try {
    await Book.deleteOne({ _id: id });
    return res.status(200).json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
