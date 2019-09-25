/*
    SomeTimes we want to run multiple Promises Parallely,
    and perform something on it after all Promises are Done.
    ....
    Something like calling FB & Insta API's Parallely
    So, we use `Promise.all`
        -If one Promise fails all are considered Failure
*/

// In case of Promise 1  Failure..
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async P1...");
    reject(new Error("Something Went Wrong..."));
    // reject("Something Went Wrong...");
  }, 2000);
});

// const p1 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("Async P1...");
//     resolve(1);
//   }, 2000);
// });

const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async P2...");
    resolve(2);
  }, 2000);
});

/*
    When we want kick start both the Async Operations and when both of them are done,
    i.e.,(Resolved) Promise's [p1 and p2] then we can do something one it. then we use,
    `Promise.all()` method which takes in a Array of Promises and Returns a new Promise.
    
*/
// Promise.all([p1, p2]).then(res => console.log(res));

// If any one of the Promise Fails.
Promise.all([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err));

/* 
    Sometimes we want to Kick of multiple Async operations,
    But want to do somethings just after one Operation is finished as we are not 
    intrested in waiting for every operation to complete.
    That's when we use `.race() method and it takes in a Array of Promises`

*/

// Promise.race([p1, p2])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

/*  
    Note!!  BY This way only...
        If we have reject(new Error("Something Went Wrong..."));
        .catch(err => console.log(err.message)); Returns only Message
        .catch(err => console.log(err)); Returns Error Call Stack Also.
*/
