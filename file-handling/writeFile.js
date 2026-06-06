// -------------------------------------
// Writing to a File in Node.js
// -------------------------------------

const fs = require("fs");

// writeFileSync() is used to create a new file or overwrite an existing file with new content.
fs.writeFileSync(
    "output.txt",
    "This file was created using writeFileSync()."
);

console.log("Data written successfully.");