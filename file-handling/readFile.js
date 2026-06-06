// -------------------------------------
// Reading a File in Node.js
// -------------------------------------

// fs stands for File System. It is a built-in Node.js module that provides methods to work with files and folders.

const fs = require("fs");

// readFileSync() is used to read the contents of a file.
const data = fs.readFileSync("sample.txt", "utf8");

console.log("File Content:");
console.log(data);