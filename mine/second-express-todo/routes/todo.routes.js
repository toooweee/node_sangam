const express = require("express");
const router = express.Router();
const Todo = require("../controllers/todo.controller.js");

const todo = new Todo();

router.get("/todo", todo.getTodos);
router.get("/todo/:id", todo.getTodoById);
router.post("/todo", todo.createTodo);
router.put("/todo/:id", todo.updateTodo);
router.delete("/todo/:id", todo.deleteTodo);

module.exports = router;
