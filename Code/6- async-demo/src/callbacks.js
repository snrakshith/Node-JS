// Async Code...
console.log("Before");
getUser(1, user => {
  console.log("User", user);
  getRepositories(user.gitHubUser, repos => {
    console.log("Repos", repos);
    getCommits(repos, commits => {
      console.log("Repos", commits);
      /*
       We Refer this Deeply nested functional calls as,
       CALLBACK HELL or Christmas Tree Problem!!...
      */
    });
  });
});

// We can also set an standalone Async Function.
// getRepositories("Rakshith", repos => {
//   console.log("Repos", repos);
// });
// console.log("After");

// Sync Code...

// console.log("Before");
// const getUser = getUser(1);
// const getRepositories = getRepositories(user.getRepositories);
// const getCommits = getCommits([0]);
// console.log("After");

// Defining Async Function....

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from DataBase..!");
    callback({ id: id, gitHubUser: "Rakshith" });
  }, 2000);
}

function getRepositories(user, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Getting GitHub Commits...");
    callback(["commit"]);
  }, 2000);
}
