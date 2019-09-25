/* function(exports, require, module, __filename, __dirname) { }   <--------------
                                                                                 |
1. At run time Node trys to wrap's up all the `Modules` into a special Function,-|
    called as `Module Wrapper Function`.
*/

// ---- Exporting of a Module is Demonstrated---

/*
1. Decide what we need to Export Mainly i.e.,
    what needs to be Public and
    what needs to be Private.
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2. We should not try to export url variables,
    as they are just `Pure Implementation Details`,
    which can literaly changes over different Modules,
    if they are made public they might break the CodeBase.
*/

var url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

/*
 Exporting an entire Object named log or url. ( We export an entire object, 
  if the object is complex that means if it has multiple functional methods.)
*/
module.exports.log = log;
module.exports.url = url;
// it can also be endPoint
module.exports.endPoint = url;

/*
 Exporting a single function called log or url,
 instead of   an entire Object.
*/
module.exports = log;

// We can also Do,
exports.log = log;
// But not this way
exports = log;
