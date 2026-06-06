// -------------------------------------
// Importing Modules
// -------------------------------------

// Import multiple functions
const math = require("./mathOperations");

// Import a single function
const greet = require("./greetings");

console.log("Addition:", math.add(10, 20));
console.log("Subtraction:", math.subtract(20, 5));
console.log("Multiplication:", math.multiply(5, 4));

console.log(greet("Harshitha"));