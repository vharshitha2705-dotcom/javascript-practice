// -------------------------------------
// Do...While Loop in JavaScript
// -------------------------------------
// A do...while loop executes the code block first
// and then checks the condition.
// Therefore, it always runs at least one time.

// ---------------------------------------------------
// Print all multiples of 5 less than or equal to 100
// ---------------------------------------------------

let a = 5;

do {
    // Since 'a' starts at 5 and is incremented by 5,
    // every value is already a multiple of 5.
    console.log(a + " is a multiple of 5");

    a += 5;
} while (a <= 100);


// ---------------------------------------------------
// Print the squares of numbers from 1 to 10
// ---------------------------------------------------

let b = 1;

do {
    console.log("Square of " + b + " is: " + (b * b));
    b++;
} while (b <= 10);


// ---------------------------------------------------
// Generate the first 10 terms of the Fibonacci sequence
// ---------------------------------------------------

let first = 0;
let second = 1;
let count = 1;

// Print the first two terms
console.log(first);
console.log(second);

do {
    // Calculate the next Fibonacci number
    let next = first + second;

    console.log(next);

    // Update the previous two numbers
    first = second;
    second = next;

    count++;
} while (count < 9);


// ---------------------------------------------------
// Print all factors of a given number
// ---------------------------------------------------

let number = 12;
let j = 1;

do {
    // If the number is divisible by j,
    // then j is a factor of the number.
    if (number % j == 0) {
        console.log(j + " is a factor of " + number);
    }

    j++;
} while (j <= number);