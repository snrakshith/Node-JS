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
// createCourse();

// The Changes begin for the section Begin Here.. !!!
// The Query for Courses Begin Here..

// 1 for Acending & -1 for Descending.
// Most of the methods take in Objects with `Key Value Pairs`.
// `.find() method` takes in an Filterable Objects

async function getCourses() {
  const courses = await Course.find({ author: "Rakshith", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourses();
