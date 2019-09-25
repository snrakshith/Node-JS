// Validation Error's
/* 
    When creating an class instance ie., Object [Course]
    If some of the Properties is missing, Like
        - Name
        - Author
        - Category
        - tags
        - isPublished ... then it displays the Error's...
*/

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
      validator: function(v) {
        return v && v.length > 0;
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
  //   category:["Web","Mobile","Desktop"],
  category: [],
  author: "Rakshith",
  //   tags: "Front-End",
  tags: "-",
  isPublished: true,
  price: 15
});

try {
  const result = await course.save();
  console.log(result);
  //  Changes Begin here!!..
} catch (ex) {
  //   console.log(ex.message);
  //   console.log(ex.errors);
  //   Here we will have 2 More Error's i.e., is " tags & category "
  ex.errors.tags;
  ex.errors.category;
  //   For Detailed Error Log
  for (field in ex.errors) console.log(ex.errors[field]);
  //   For Just an Error Message
  for (field in ex.errors) console.log(ex.errors[field].message);
}
