// Joi Package is used for Input data validation, and Joi is a class.
const Joi = require("joi");
const express = require("express");
const app = express(); // Created app object.

app.use(express.json());

const courses = [
  { id: 1, course: course1 },
  { id: 2, course: course2 },
  { id: 3, course: course3 }
];

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    // Send a 400 Bad Request
    res.status(400).send(result.error); // anyone can be used..
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // if(! req.body.name || req.body.name.length < 3){
  //   // Send a 400 Bad Request
  //   res.status(400).send('Name is required and should be minimum 3 characters');
  //   return;
  // }

  const course = {
    id: course.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT ${port}..`));

/*
  Joi needs a schema i.e., a structure for an object.
*/
