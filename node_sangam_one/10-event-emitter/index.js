const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const greet = (name) => {
  console.log(`Hello and Welcome to our super, ${name}!`);
};

myEmitter.on("join", (name) => {
  greet(name);
});

myEmitter.emit("join", "Islam");
