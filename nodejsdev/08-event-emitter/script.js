const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("hello", () => console.log("Hello World!"));
myEmitter.emit("hello");
myEmitter.emit("hello");
myEmitter.emit("hello");
myEmitter.emit("hello");
