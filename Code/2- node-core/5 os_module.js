const os = require("os");

var freeMemory = os.freemem();
var totalMemory = os.totalmem();
var upTime = os.uptime();

// console.log('Free Memory:' + freeMemory);

// Use of Template String ``
// ES6 | ECMAScript 6 or ES 2015

console.log(`Free Memory: ${freeMemory}`);

console.log(totalMemory);
console.log(upTime);
