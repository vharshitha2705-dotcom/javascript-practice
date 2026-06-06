// -------------------------------------
// Appending Data to a File in Node.js
// -------------------------------------

const fs = require("fs");

// appendFileSync() is used to add new content to the end of an existing file without removing the existing content.
fs.appendFileSync(
    "output.txt",
    "\nThis line was added using appendFileSync()."
);

console.log("Data appended successfully.");