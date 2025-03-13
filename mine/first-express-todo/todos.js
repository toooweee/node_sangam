class Todo {
  lastTodoId = 0;
  todos = [];

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getAllTodos() {
    return this.todos;
  }

  createTodo(todo) {
    this.todos.push({
      id: ++this.lastTodoId,
      ...todo,
    });

    return todo;
  }

  updateTodo(id, updatedTodo) {
    const todo = this.getTodo(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    this.todos[id] = {
      id,
      ...updatedTodo,
    };

    return this.getTodo(id);
  }
}

module.exports = Todo;
