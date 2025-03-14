const mongoose = require("mongoose");

// Определяем схему
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  isDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Создаем модель один раз
const todoModel = mongoose.model("todos", todoSchema);

class Todo {
  async getTodo(id) {
    return todoModel.findById(id);
  }

  async getAllTodos() {
    return todoModel.find();
  }

  async createTodo(todo) {
    return todoModel.create(todo);
  }

  async updateTodo(id, updatedTodo) {
    return todoModel.findByIdAndUpdate(id, updatedTodo, { new: true });
  }

  async deleteTodo(id) {
    return todoModel.findByIdAndDelete(id);
  }
}

module.exports = Todo;
