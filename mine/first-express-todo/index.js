const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

const express = require("express");
const app = express();

const pointTimeMiddleware = require("./middlewares/endpointTime.middleware.js");

app.use(pointTimeMiddleware);
app.use(express.json());

const Todo = require("./todos.js");
const todo = new Todo();

app.get("/todos", (req, res) => {
  res.status(200).json(todo.getAllTodos());
});

app.get("/todos/:id", (req, res) => {
  const id = +req.params.id;
  const findedTodo = todo.getTodo(id);

  if (!findedTodo) {
    res.status(404).json({ message: "Not Found" });
  }

  res.status(200).json(findedTodo);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;

  if (!newTodo) {
    res.status(404).json({ message: "todo can't be empty" });
  }

  todo.createTodo(newTodo);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const updatedTodo = req.body;
  const todoId = +req.params.id;

  if (!updatedTodo) {
    res.status(404).json({ message: "Todo can't be empty" });
  }

  res.status(201).json(todo.updateTodo(todoId, updatedTodo));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
