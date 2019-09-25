/*
    Async and Await is just a Syntactal over Promises in JavaScript,
    So that we can write Async Code in a Synchronous Fashion.
    All the Functional calls must be wrapped using an `await Keyword` &
    Finally wrapped using  a `Async Functional Wrapper`.
*/
/*
    When ever we want Play Safe we should try to wrap the functional calls using,
    TRY BLOCK{} and
    CATCH BLOCK{}
*/
console.log("Before");
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUser);
    const commits = await getCommits(repos);
    console.log("Repos", commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}

// And Call the Async Function here!!...
displayCommits();
console.log("After");

// Defining Async Function....

function getUser(id) {
  setTimeout(() => {
    console.log("Reading from DataBase..!");
    resolve({ id: 1, gitHubUser: "Rakshith" });
  }, 2000);
}

function getRepositories(user) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    resolve(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(commits) {
  setTimeout(() => {
    console.log("Getting GitHub Commits...");
    resolve(["commit"]);
  }, 2000);
}
