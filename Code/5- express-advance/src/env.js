const config = require("config");
const morgan = require("morgan");
const express = require("express");
const app = express();

// Configuration's
// To set different environments we, use
console.log("Application Name:" + config.get("name"));
console.log("Mail Server:" + config.get("mail.host"));
// console.log('Mail Password:'+ config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan Enabled");
}

// console.log(`NODE_ENV:${process.env.NODE_ENV}`);
// console.log(`APP:${app.get("env")}`);

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT ${port}..`));
