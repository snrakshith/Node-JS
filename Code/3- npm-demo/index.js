// var _ = require('./underscore'); // underscore/index.js
var _ = require("underscore");

/*

Modules are checked in this Presidence:
1. Core Modules
(i.e., is standard default library Modules which comes with Node when installed) 

2. File or Folder inside the project setup

3. node_modules 
(i.e., in 3rd party packages which were installed in as Dependencies or Dev_Dependencies)

*/

var result = _.contains([1, 2, 3], 2);
console.log(result);
