/*  
    1.  Any thing that we put inside `app.use();` installs a Middleware function in a 
        `Request Processing PipeLine`. So that it can be used up in our Application.
    2.  If we have many Middleware function in our Application Just Remember!!.
        That these Middleware functions are called in Sequence.
*/

// const express = require("express");
// const app = express();

// Middleware Function for Logging...
function log(req, res, next) {
  console.log("Logging...");
  next();
}

// Middleware Function for Authentication...
function auth(req, res, next) {
  console.log("Authentication...");
  next();
}

module.exports = log;
module.exports = auth;
