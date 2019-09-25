/**
 * Adding Regular Expression for Complex Quering..
    / ^ pattern / => Starts with
    / pattern$ /  => Ends with
    .*pattern.*   => Contains the String.
*/

async function getCourses() {
  const courses = await Course

    // Starts with Mosh, it can be anything Mosh, Mosh Hamedani, Moshafge Hamedani.
    .find({ author: "/^Mosh/" })

    // Ends with Hamedani
    .find({ author: "/Hamedani$/" })

    // Ends with Hamedani and it is case sensitive
    .find({ author: "/Hamedani$/i" })

    // Contains Mosh
    .find({ author: "/.*Mosh.*/" })

    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourses();
