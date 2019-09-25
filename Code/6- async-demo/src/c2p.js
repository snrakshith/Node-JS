// Async Code...
console.log("Before");
// getUser(1, user => {
//   getRepositories(user.gitHubUser, repos => {
//     getCommits(repos, commits => {
//       console.log(commits);
//     });
//   });
// });
console.log("After");

// One Way...
// const p = getUser(1);
// p.then(user => console.log(user));

getUser(1)
  .then(user => getRepositories(user.gitHubUser))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log("Commits", commits))
  .catch(err => console.log("Error", err.message));

// Defining Async Function....

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading from DataBase..!");
      resolve({ id: id, gitHubUser: "Rakshith" });
    }, 2000);
  });
}

function getRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting GitHub Commits...");
      resolve(["commit"]);
    }, 2000);
  });
}
