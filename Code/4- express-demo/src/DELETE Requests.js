const express = require("express");
const app = express();

app.delete("/api/courses/:id", (req, res) => {
  // Look up for the course.
  // If not found Return 404
  // If found Delete the resourses
  // And by convention return,
  // The deleted resourses to the User.
});

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Server started @ ${port}`));
