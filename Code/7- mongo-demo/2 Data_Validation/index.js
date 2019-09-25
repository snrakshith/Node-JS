// EvenThough the MongoDB Database is Schema Less
// We still want to validate the Schema so,
// that the Data what we are saving is not corrupt.

// ......

// Eventhough we have 2 Data Validations Procedure's,
//    - Through Joi and Mongoose Validation Packages.

// But Still we want to use Both the validation Protocols.
// Joi for API Validation as before we Send it out to the Mongoose.
// Mongoose for DATA Validation before we store it in our DataBase.

const mongoose = require("mongoose");

// Defining Connection String...
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB.."))
  .catch(err => console.log("Could not connect...", err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  tags: [String],
  //   date: { type: Date, default: Date.now },
  date: Date,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Angular.JS",
  author: "Rakshith",
  tags: "Front-End",
  isPublished: true,
  price: 15
});

try {
  const result = await course.save();
  console.log(result);
} catch (ex) {
  console.log(ex.message);
}

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
