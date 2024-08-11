import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("hello world " + name);
}

function goodByeHandler(name) {
  console.log("goodbye world " + name);
}

//Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

//Emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "Jim");

//Error handling
myEmitter.on("error", (error) => {
  console.log("An error occured", error);
});

//Simulate Error
myEmitter.emit("error", new Error("Something went wrong"));
