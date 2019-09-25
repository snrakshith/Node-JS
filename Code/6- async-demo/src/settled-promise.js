/*
 Settled Promises:
    A Promise which is already Resolved or Rejected.
    They are very usefull while performing Unit Tests.
*/

// A Promise User Object which is Resolved by Default
const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result));

// Don't just pass String displaying Error Message as it does `Not be Included`
// the Call Stack.
const p = Promise.reject("Reason For Rejection");
p.catch(err => console.log("Error", err));

// When ever we Reject a Promise, Please pass in Native Error Object
// So that it can include Call Stack that comes with ever Error Object in JavaScript.
const p = Promise.reject(new Error("Reason For Rejection"));
p.catch(err => console.log("Error", err.message));
// p.catch(err => console.log("Error", err));

/*  
    Note!!  BY This way only...
        If we have reject(new Error("Something Went Wrong..."));
        .catch(err => console.log(err.message)); Returns only Message
        .catch(err => console.log(err)); Returns Error Call Stack Also.
*/
