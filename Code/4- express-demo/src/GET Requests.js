// Simple Implementation for a Single and Multiple Endpoints.
const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

// We have an Endpoint for all the courses.
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

/*
   We have an Endpoint for a specific course, 
   which is basically done through some logic.
*/

// (req.params.id) returns string,
// well inorder for the comparison to work properly we need to `parse it to Integer`.

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    // return a response with a status code 404 if the Requested resourse is not found &,
    // optionaly send a message to client that the course is not found.
    res.status(404).send("The course with the given ID is not found");
  res.send(course);
});

const port = process.env.PORT || 3000;
// Uses default Port 3000
app.listen(port, () => console.log(`Listening on port ${port}..`));
