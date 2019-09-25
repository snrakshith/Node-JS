const express = require("express");
const app = express();

app.put("/api/course", (req, res) => {
  // Look up for the course.
  // If not found, return 404 - Page Not Found
  // If found Validate,
  // If it is invalid, return 400 - Bad Request
  // Update the course then,
  // Return the Updated course.
});

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Server is fired and running ${port}..`));
