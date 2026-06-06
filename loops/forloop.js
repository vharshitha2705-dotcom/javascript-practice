// -------------------------------------
// For Loop in JavaScript
// -------------------------------------
// A for loop is used to execute a block of code
// a specific number of times.

// -------------------------------------
// Example 1: Check whether a number is prime
// -------------------------------------

let count = 0;
let num = 29;

// Count the number of factors of 'num'.
for (let j = 1; j <= num; j++) {
    if (num % j == 0) {
        count++;
    }
}

// A prime number has exactly two factors: 1 and itself.
if (count == 2) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}

// -------------------------------------
// Example 2: Print all prime numbers from 1 to 100
// -------------------------------------

let count1;

// Iterate through each number from 1 to 100.
for (let i = 1; i <= 100; i++) {

    // Reset the factor count for each number.
    count1 = 0;

    // Count the number of factors of the current number.
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count1++;
        }
    }

    // If the number has exactly two factors,
    // it is a prime number.
    if (count1 == 2) {
        console.log(i + " is a prime number");
    }
}

