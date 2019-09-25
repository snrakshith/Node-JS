/*
1. Lot of Node's core functionality is built out off Events.
2. Defination of Event:
    An event is an Signal that indicates something has happened to the Application
*/

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a Listener (through .on or addListner method both are same)
emitter.on("messageLogged", function() {
  console.log("Listner Called..");
});

// Raise an Event
emitter.emit("messageLogged");

/* 
The order of method calls are most important,
 1st we need to Register and then Raise an event.
*/
