// -------------------------------------
// While Loop in JavaScript
// -------------------------------------
// A while loop repeatedly executes a block of code
// as long as the specified condition evaluates to true.

// -------------------------------------
// Example 1: Print multiples of 8 less than 20
// -------------------------------------

let a = 1;

while (a < 20) {
    a++;

    // Check whether the current number is divisible by 8.
    if (a % 8 == 0) {
        console.log(a + " is a multiple of 8");
    }
}

// -------------------------------------
// Example 2: Find the sum of numbers from 1 to 10
// -------------------------------------

let b = 1;
let count = 0;
let sum = 0;

// Continue looping until 10 numbers have been added.
while (count < 10) {
    sum = sum + b;
    b++;
    count++;
}

// Display the final sum.
console.log("Sum of numbers from 1 to 10: " + sum);

// -------------------------------------
// Example 3: Sum of Digits in a Number
// -------------------------------------

let number = 578;
let sumOfDigits = 0;
let lastDigit;

while (number > 0) {
    lastDigit = number % 10;
    sumOfDigits = sumOfDigits + lastDigit;
    number = Math.floor(number / 10); // Remove the last digit
}

console.log("Sum of Digits: " + sumOfDigits);