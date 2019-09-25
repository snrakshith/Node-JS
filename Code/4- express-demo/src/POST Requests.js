// Handling POST Requests
const express = require("express");
const app = express(); // Created app object.

/*
  We need to enable parsing of JSON objects, from a requests body
  So that line 25's `req.body.name` works properly.  
*/

// Any thing that we put inside `app.use();` returns a Middleware.
// i.e.,  express.json() method returns a piece of middleware
// And which is used up by the `app.use();` in adding it to Request Processing PipeLine.

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

// Used mainly to add an new course to an existing object Store.
app.post("/api/courses", (req, res) => {
  const course = {
    id: course.length + 1,
    name: req.body.name
  };
  courses.push(course);
  // Every time a new resources is created on server side,
  // it should return that newly created object inside the body of that response.
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT ${port}..`));
