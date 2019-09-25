// Async Validator..

/* 
    Some times when we are dealing with ``Remote HTTP for Login`` or 
    ``Reading Data from DataBase`` that's when we use Async Validator..
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
  //   Changes Begin Here!!!....
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v, callback) {
        setTimeout(() => {
          //   Do Some Async Work...
          const result = v && v.length > 0;
          callback(result);
        }, 4000);
      },
      message: "A course should have Atleast one Property"
    }
  },
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
  category: "Web",
  author: "Rakshith",
  // Change's Here TOO...
  tags: [],
  tags: null,
  isPublished: true,
  price: 15
});
