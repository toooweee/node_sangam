const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting} ${name}`);
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (name) => {
  console.log("Greeting Event", name);
});

myCustomEmitter.greet("Islam");
