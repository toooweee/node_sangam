const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const authMiddleware = require("../middleware/auth.js");

router.get("/todo", authMiddleware, todoController.getAllTodos);
router.post("/todo");
router.get("/todo");
router.patch("/todo");
router.delete("/todo");

module.exports = router;
