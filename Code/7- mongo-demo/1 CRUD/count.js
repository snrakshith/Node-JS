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

// The Changes begin for the section Begin Here.. !!
/*
    Sometimes we need to use `.count() method` to display just the total,
    Number of Documents which matchs with the .find() creiteriy.
    
    Than, Displaying the Filtered out courses which is done using `.select() method `.
*/
async function getCourses() {
  const courses = await Course.find({ author: "Rakshith", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    // .select({ name: 1, tags: 1 });
    .count();
  console.log(courses);
}
getCourses();
