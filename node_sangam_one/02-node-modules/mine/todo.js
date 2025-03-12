class Todo {
  lastTodoId = 0;
  todos = [];

  getTodos() {
    return this.todos;
  }

  createTodo(todo) {
    const newTodo = {
      id: ++this.lastTodoId,
      ...todo,
    };

    this.todos.push(newTodo);

    return newTodo;
  }
}

module.exports = Todo;
