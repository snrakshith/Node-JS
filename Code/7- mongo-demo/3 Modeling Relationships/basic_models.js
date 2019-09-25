/*
    There are 2 ways of Linking the different Document Associations.
    - Using References (Normalization) =>  Consistency
    
    - Using Embedded Documents (Denormalization) => Query Performance 
*/

// The 2 Aproaches hv different tradeoff btw each others ie., is
// - Query Performance vs Consistency..

//    - Using References (Normalization) =>  Consistency
const author = {
  name: "Mosh"
};

const courses = {
  author: "id"
};

//    - Using Embedded Documents (Denormalization) => Query Performance

const courses = {
  //   Nested Structure
  author: {
    name: "Mosh",
    name: "Rakshith"
  }
};

//    - Using Hybrid Approache
/*
    Used mainly in E-commerce Applications, 
    Maily to determine if a product is sold..
    Then @ what Price ? and When it was Sold.. 
        
    ex: `MAC BOOK Pro` @ 28-July-2019 , 7:30 pm
    And mainly To Store the SnapShot of Transactions from,
        " Ordering -> Shipping -> Delivering "

*/

let author = {
  name: "Mosh"
  // 50 other properties
};

let course = {
  author: {
    id: "ref",
    name: "Mosh"
  }
};
