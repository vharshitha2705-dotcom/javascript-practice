// -------------------------------------
// Conditional Statements in JavaScript
// -------------------------------------
// Conditional statements execute different blocks of code
// based on whether a specified condition is true or false.


// -------------------------------------
// 1. if...else Statement
// Check whether a number is even or odd.
// -------------------------------------

let a = 25;

if (a % 2 == 0) {
    console.log(a + " is an even number");
} else {
    console.log(a + " is an odd number");
}

// -------------------------------------
// 2. if...else if...else Statement
// Find the greatest among three numbers.
// -------------------------------------

let a1 = 25,
    a2 = 6789,
    a3 = 768;

if (a1 > a2 && a1 > a3) {
    console.log(a1 + " : a1 is the greatest number");
} else if (a2 > a1 && a2 > a3) {
    console.log(a2 + " : a2 is the greatest number");
} else {
    console.log(a3 + " : a3 is the greatest number");
}

// -------------------------------------
// 3. Nested if Statement
// Check whether a number is positive.
// If it is positive, determine whether it is even or odd.
// -------------------------------------

let b = -777;

if (b > 0) {
    if (b % 2 == 0) {
        console.log(b + " is a positive even number");
    } else {
        console.log(b + " is a positive odd number");
    }
} else {
    console.log(b + " is a negative number");
}