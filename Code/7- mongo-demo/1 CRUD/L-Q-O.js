/* 
    Logical Query Operators:
        or
        and
*/

async function getCourses() {
  const courses = await Course
    // We have to pass in a empty `.find() method`....
    .find()
    // `.or() method` takes in an array of Multiple Filterable Objects
    .or([{ author: "Rakshith" }, { isPublished: true }])
    // `.and() method` also takes in an array of Multiple Filterable Objects
    .and([{ author: "Rakshith" }, { isPublished: true }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();
