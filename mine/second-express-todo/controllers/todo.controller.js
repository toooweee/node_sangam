class Todo {
  async getTodos(req, res) {
    res.status(200).json({
      id: 1,
      title: "Poop",
    });
  }
  async getTodoById(req, res) {}
  async createTodo(req, res) {}
  async updateTodo(req, res) {}
  async deleteTodo(req, res) {}
}

module.exports = Todo;
