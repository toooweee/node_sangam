const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const pointTimeMiddleware = require("./middlewares/endpointTime.middleware.js");

app.use(pointTimeMiddleware);
app.use(express.json());

const Todo = require("./todos.js");
const todo = new Todo();

app.get("/todos", async (req, res) => {
  res.status(200).json(await todo.getAllTodos());
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const findedTodo = await todo.getTodo(id);

  if (!findedTodo) {
    res.status(404).json({ message: "Not Found" });
  }

  res.status(200).json(findedTodo);
});

app.post("/todos", async (req, res) => {
  const newTodo = req.body;

  if (!newTodo) {
    res.status(404).json({ message: "todo can't be empty" });
  }

  await todo.createTodo(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const updatedTodo = req.body;

  if (updatedTodo === {}) {
    res.status(404).json({ message: "Todo can`t be empty" });
  }

  const todoId = +req.params.id;

  try {
    res.status(201).json(todo.updateTodo(todoId, updatedTodo));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
