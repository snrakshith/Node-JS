const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID is not found");
  res.send(course);
});

router.post("/", (req, res) => {
  const course = {
    id: course.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

module.exports = router;
