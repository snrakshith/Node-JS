// ---- Loading of a Module is Demonstrated---

/*
--
1. In order for you to load the Module.
    We use `require()` function.
2.`require()` function is only available in Node.
3.  require('../'); For the Root Directory.
    require('./'); For the Current Directory.
    require('./subFolder/logger.js'); For the Current Directory with a Subfolder.
4. We may or maynot use .js extension.
5. We should avoid using var while using the require function,
     `var logger = require('./loggers');`
    Because it can accidentally overwritten, so we should use,
        `const` keyword.
--
*/

/*
 Loading an entire Object, named logger.
 Using a keyword Var is not in use Any More.
*/
var logger = require("./loggers");

// Instead use constant Keyword.
const logger = require("./loggers");

console.log(logger);
// Now we can import Different methods from `logger.js` Modules
logger.log("message");
logger.url();

/*
Loading Just a single function,instead of an entire Object and 
calling it as a standard alone function `log()`.
*/
const log = require("./loggers");
log("message");
