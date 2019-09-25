// In order to avoid `CALLBACK HELL`,
// we replace ananymous function with Named Function.

console.log("Before");
getUser(1, getRepositories);
console.log("After");

function getRepositories(user) {
  getRepositories(user.gitHubUser, getCommits);
}
function getCommits(repos) {
  getCommits(repo, displayCommits);
}
function displayCommits(commits) {
  console.log(commits);
}
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
    // callback(["repo1", "repo2", "repo3"]);
    callback([1]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["commit"]);
  }, 2000);
}
