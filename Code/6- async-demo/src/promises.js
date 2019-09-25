const p = new Promise((resolve, reject) => {
  // Kicks off some async work
  // like DataBase, Networks, etc...
  setTimeout(() => {
    /*     
    In case of a Successfull Async Operation the State of the Promise goes from,
    " Pending To => Resolved or Fullfiled " and we use a resolve() function to return a Value,
    to the consumer of this promise.
    And with consume that Computed Value with the help of .then
        
    If the Async Operation fails then the State of the Promise goes from,
    " Pending To => Rejected " and we use a reject() function to return a error,
     to the consumer of this promise.
     And with consume that error message with the help of .cath
    */

    resolve(1); // or
    reject(new Error("message"));
  }, 2000);
});

p.then(result => console.log(result)).catch(err => console.log(err.message));

/*
    .then & .catch takes in a function
    resolve() function takes in a value
    reject() function takes in a Error Object
*/
