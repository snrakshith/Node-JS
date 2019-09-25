const fs = require('fs');

/*
1. In case of `File System Module` the methods comes with pairs,
    Sync and Async.
2. Always we should use Async methods.
*/

// Synchornous Method
const files = fs.readdirSync('./');
console.log(files);

// Asynchornous Method
const files = fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err)
    else console.log('Files', files);
});