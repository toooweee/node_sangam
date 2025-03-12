const Todo = require("./todo.js");

const myTodo = new Todo();

console.log(myTodo.getTodos());

myTodo.createTodo({
  title: "My first",
  description: "My first description",
});

myTodo.createTodo({
  title: "My second",
  description: "My second description",
});

myTodo.createTodo({
  title: "My third",
  description: "My third description",
});

console.log(myTodo.getTodos());
