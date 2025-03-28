const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

/**
 * Если клиент отправляет POST-запрос с телом {"title": "New Book"},
 * то после app.use(express.json()); вы сможете получить эти данные в маршруте через req.body.title.
 * Без этого middlewares req.body будет undefined.
 */
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
];

let lastTodoId = 2;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our bookstore api" });
});

app.post("/books", (req, res) => {
  const newBook = {
    id: ++lastTodoId,
    title: req.body.title,
  };

  if (!req.body.title) {
    return res.status(400).json({ message: "Please enter title" });
  }

  books.push(newBook);

  res.status(200).json({
    message: "Successfully created book",
    data: newBook,
  });
});

app.get("/books", (req, res) => {
  /**
   * Если вы точно знаете, что отправляете JSON (как в вашем случае с API книжного магазина),
   * используйте res.json — это делает намерения кода более явными.
   * Если вам нужно отправлять данные в других форматах (например, текст, файлы),
   * используйте res.send с нужными заголовками.
   */
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = +req.params.id;

  const book = books.find((book) => book.id === id);

  if (!book) {
    res.status(404).send("Book not found");
  }

  return res.json(book);
});

app.put("/books/:id", (req, res) => {
  const id = +req.params.id;
  const updatedBook = req.body;

  if (!updatedBook) {
    res.status(400).json({ message: "Please enter book" });
  }

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    res.status(404).json({ message: "Book not found" });
  }

  books[bookIndex] = {
    id,
    ...updatedBook,
  };

  res.status(200).json(updatedBook);
});

app.delete("/books/:id", (req, res) => {
  const id = +req.params.id;

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    res.status(404).json({ message: "Book not found" });
  }

  books.splice(bookIndex, 1);
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} `);
});
