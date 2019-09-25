const EventEmitter = require("events");
const emitter = new EventEmitter();

// Event Arguments are usefull which we pass in as an additional Data,
// to call back functions when an event is triggered.

// By doing this we can actually pass the data about an event which just happened.

// The call Back function can take in Event Arguments.
emitter.on("messageLogged", function(arg) {
  // e , eventArg
  console.log("Listner Called..", arg);
});

// We can pass in Event Arguments as an secondary optional values
emitter.emit("messageLogged", 1, "http://www.icon.in");

// Instead we pass in an Object for better Understanding.
emitter.emit("messageLogged", { id: 1, url: "http://www.icon.in" });
