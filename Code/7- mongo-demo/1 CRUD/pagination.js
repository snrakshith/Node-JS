// The Changes begin for the section Begin Here.. !!
/*
> We use .skip() method to implement Pagination and
    Both these .limit() & .skip() method goes hand in hand .
*/
async function getCourses() {
  /*
        In real world applications we will not Hardcode these numbers,
        here instead they are passed in as a QueryString Parameters from RESTFull API's.
        ....
        And it is SomeThing like this," /api/courses?pageNumber=2&pageSize=10 "
    */
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ author: "Rakshith", isPublished: true })
    // The Formula to Skip all the Documents from the Previous Page
    // also under an assumption that PageNumber begins from 1.
    .skip((pageNumber - 1) * pageSize)
    // .limit(10)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourses();
