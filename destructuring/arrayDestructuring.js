// -------------------------------------
// Array Destructuring in JavaScript
// -------------------------------------

// Array destructuring extracts values
// from an array into separate variables.

const colors = ["Purple", "Red", "Blue", "Yellow"];

// Destructuring
const [firstColor, secondColor, thirdColor] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Third Color:", thirdColor);

// Skipping elements
const [, , third] = colors;

console.log("Only Third Color:", third);