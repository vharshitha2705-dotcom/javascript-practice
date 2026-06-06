// ==================================================
// FUNCTIONS IN JAVASCRIPT
// Functions are reusable blocks of code that perform
// a specific task.
//
// Benefits:
// ✔ Code Reusability
// ✔ Better Readability
// ✔ Easier Maintenance
// ==================================================



// --------------------------------------------------
// METHOD 1: FUNCTION DECLARATION
// --------------------------------------------------

// A named function created using the 'function' keyword.
//
// Syntax:
// function functionName(parameters) {
//     code
//     return value
// }

//  Easy to read
//  Hoisted (can be called before declaration)


function add(a, b) {

    // Return the sum of two numbers
    return a + b
}

// Calling the function and storing the result
let sum = add(5, 8)

console.log(sum)

// Output:
// 13


