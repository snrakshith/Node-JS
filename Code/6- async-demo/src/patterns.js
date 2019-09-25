console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

// Callbacks
// Promises
// Async/await

function getUser(id) {
  setTimeout(() => {
    console.log("Reading from DataBase..!");
    return { id: id, gitHubUser: "Rakshith" };
  }, 2000);

  //  If we call a Async Function the Value's which are outside the setTimeout(),
  // function are only returned.
  return "Hi";
}

function getRepositories(username) {
  setTimeout(() => {
    console.log("Calling GitHUb API...");
    callback[("repo1", "repo2", "repo3")];
  }, 2000);
}
