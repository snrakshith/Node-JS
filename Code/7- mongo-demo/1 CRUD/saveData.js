const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  // date: Date,
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

// The Changes begin for the section Begin Here.. !!
// `course.save()` is used to Save a Document in to a Database..
async function createCourse() {
  const course = new Course({
    name: "Angular.js Course",
    author: "Rakshith",
    tags: ["angular", "Frontend"],
    isPublished: true
  });
  const result = await Course.save();
  console.log(result);
}
createCourse();
