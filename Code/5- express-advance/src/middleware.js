const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const logger = require("./create_middleware");
const auth = require("./create_middleware");
const app = express();

/*
    1. An Express application is a collection of many Middleware functions.
    2. And every Middleware functions are in a Request Processing PipeLine
    3. Some Middleware functions:
        Receives a request & terminates the request-response cycle with a Response to client.
    4. Other:
        Middleware functions passes on the control to the other Middleware function.
    5. Any thing that we put inside `app.use();` is a Middleware function and that is been 
        used up by our Express Application and Added to the Request Processing PipeLine.
            i.e.,  express.json() method returns a piece of middleware.
                                    ==== OR ====
    5. We need to import a Middleware functions then with the help of `app.use();` we install a Middleware function in a 
        Request Processing PipeLine. So that it can be used up in our Application.
*/

/*
    Here, we have 2 Middleware functions used in this `middleware.js module`.

    1.  We use express.json() to enable parsing of JSON objects, from a requests body
        So that line 25's `req.body.name` works properly. 
    2.  Even the Route Handler which takes in request method from user,
        is a Middleware functions
*/
// Some of the Builtin Middleware's in Express.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key= value&key=value
app.use(express.static("../public"));
app.use(helmet());
app.use(morgan("tiny"));

// Importing Custom Middleware
app.use(logger);
app.use(auth);

/*
// Middleware Function for Logging...
app.use(function(req, res, next) {
  console.log("Logging...");
  next();
});

// Middleware Function for Authentication...
app.use(function(req, res, next) {
  console.log("Authentication...");
  next();
});
*/
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID is not found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: course.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT ${port}..`));
