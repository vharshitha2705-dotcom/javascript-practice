// --------------------------------------------------
// METHOD 3: ARROW FUNCTION (ES6)
// --------------------------------------------------

// Modern and shorter syntax for writing functions.
//
// Syntax:
// (parameters) => expression

let sum2 = (a, b) => a + b

console.log(sum2(2, 4))

// Output:
// 6

// ==================================================
// EXAMPLE OF ARROW FUNCTION WITH ONE PARAMETER
// ==================================================

let square = num => num * num

console.log(square(5))

// Output:
// 25



// ==================================================
// EXAMPLE OF ARROW FUNCTION WITH NO PARAMETERS
// ==================================================

let greet = () => "Hello"

console.log(greet())

// Output:
// Hello