// -------------------------------------
// Switch Statement in JavaScript
// -------------------------------------
// The switch statement executes a block of code
// based on the value of the given expression.

// Variable Declarations
let a = 25;
let b = 10;

// Operator to be evaluated
let expression = "*";

// Perform the corresponding arithmetic operation
// based on the value of 'expression'.
switch (expression) {

    // Subtraction
    case "-":
        console.log(a - b);
        break;

    // Multiplication
    case "*":
        console.log(a * b);
        break;

    // Modulus (Remainder)
    case "%":
        console.log(a % b);
        break;

    // Division
    case "/":
        console.log(a / b);
        break;

    // Default case
    // Executes when none of the above cases match.
    // Here, it performs addition.
    default:
        console.log(a + b);
}