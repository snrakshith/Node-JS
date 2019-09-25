/* 
Comparison Query Operators:
    eq (equal)
    ne (not equal)
    gt (greater than)
    gte (greater than or equal to)
    lt (less than)
    lte (less than or equal to)
    in
    nin (not in)
*/
async function getCourses() {
  const courses = await Course.find()
    // get's the equivalent Properties Defined.
    .find({ author: "Rakshith", isPublished: true })
    // get's the Courses which has exact 10 Dollar Price.
    .find({ price: 10 })
    /* get's the Courses which,
       is greater than or equal to 10 & less than or equal to 20 Dollar Price.*/
    .find({ price: { $gte: 10, $lte: 20 } })
    // get's the Courses which has 10,15,20 Dollar Price.
    .find({ price: { $in: [10, 15, 20] } })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();
