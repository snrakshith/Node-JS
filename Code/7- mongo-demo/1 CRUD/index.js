const mongoose = require("mongoose");
/*
    .connect use's Connection String.. 'Generally we take it from the Configration Folder',
    and the Connection String Returns a Promise which is handled through .then & .catch ..
*/
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB...", err));

/*
  Schema is used for defining a shape of a Document in a MongoDB Database.
  Collection is equivalent to a TABLE in Relational Database.
  Document is equivalent to a ROW in Relational Database.
  
  A single standard alone MongoDB Database can have,
  - multiple Collections with many Documents init.
*/
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  // date: Date,
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

/*
  After we define a Schema for our MongoDB Database.
  we need to Compile the "Schema into a Model"
  which gives us a class & later we can define Objects based out of Class,
  and this Object Maps to a Document in a MongoDB Database.
*/

// Class and Object => Human and John. Similarlly, We have Class...
// .model() takes in the Singular Name for the Model we are creating in a Database.

const Course = mongoose.model("Course", courseSchema);
// We have Object....
const course = new Course({
  name: "Rakshith",
  author: "allBoss",
  tags: ["node", "Backend"],
  // date: will not be defined as it is Declared Defaultly
  isPublished: true
});

// The Complete Solution for Saving the data is in savaData.js File....
// `course.save()` is used to Save a Document in to a Database..
async function createCourse() {
  // ...
  const result = await course.save();
  console.log(result);
}
createCourse();
