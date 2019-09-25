// Built In Validator's
/*
  require => which can be set to Boolean..
  require => It can be set to a function which returns Boolean..
      - As it will help in setting up a Property Conditionaly.
      `example: Price is required only if the Course is Published..`
*/

const mongoose = require("mongoose");

// Defining Connection String...
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB.."))
  .catch(err => console.log("Could not connect...", err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
    // match: /pattern/
  },
  category: {
    type: String,
    required: true,
    enum: ["Web", "Mobile", "Desktop"]
  },
  author: String,
  tags: [String],
  //   date: { type: Date, default: Date.now },
  date: Date,
  isPublished: Boolean,
  price: {
    type: Number,
    min: 10,
    max: 200,
    // Don't use Arrow Functions, as they do not support `this.`
    required: function() {
      return this.isPublished;
    }
  }
});

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Angular.JS",
  category: "-",
  author: "Rakshith",
  tags: ["Angular", "Front-End"],
  isPublished: true,
  price: 5
});

async function getCourse() {
  //   const courses = await Course.find({ tags: "backend", isPublished: true })
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] }
  })
    .sort({ price: -1 })
    .select({ name: 1, author: 1 });
  //   console.log(courses);
}

async function run() {
  const courses = await getCourse();
  console.log(courses);
}
run();
