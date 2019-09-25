// There are some set of GLOBAL OBJECTS Available in both the Runtime's
// Browsers and Node
// Example's

// global objects
// can take all the functions and variables, with them..
window.console.log("Hello World!!..");
// or Just
console.log();

// It can be prefixed with the WINDOW Object..
window.setInterval();
// or Just
setInterval();
// Applicable for every function.
clearInterval();

setTimeout();
clearTimeout();
// -----*****----

// But the WINDOW Object is not there in Node,
// instead we may use `global` object.
global.console.log("Hello World!!..");

global.setInterval();
global.clearInterval();
// or just use, as node itself prefixs globals object automatically
setInterval();
clearInterval();

// Varibales are not added to the Global space, Due to Node Modularity.
var message = "";
console.log(global.message);

// Client Side JS vs Server Side JS
