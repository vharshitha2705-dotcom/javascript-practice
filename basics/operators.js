// ------------------------------
// Variable Declarations
// ------------------------------
let a = 25;
let b = 10;

// ------------------------------
// Arithmetic Operators
// ------------------------------

// Addition (+)
console.log(a + b);

// Subtraction (-)
console.log(a - b);

// Multiplication (*)
console.log(a * b);

// Modulus (%)
// Returns the remainder after division.
console.log(a % b);

// Division (/)
console.log(a / b);

// ------------------------------
// Relational (Comparison) Operators
// ------------------------------

// Checks whether 'a' is greater than or less than 'b'.
if (a > b) {
    console.log("b is less than a");
} else if (a < b) {
    console.log("b is greater than a");
}

let c = 25;
let d = 9;

// Using relational operators with logical AND (&&)
// Determines whether the number is single-digit or double-digit.
if (d >= 0 && d <= 9) {
    console.log("d is a single-digit number");
} else if (d >= 10 && d <= 99) {
    console.log("d is a double-digit number");
}

// ------------------------------
// Equality Operators
// ------------------------------

// Strict Equality (===)
// Compares both value and data type.
console.log("Harshi" === "Harshi");   // true
console.log("Harshi" === "HARSHI");   // false (case-sensitive)
console.log("25" === 25);             // false (different data types)

// Loose Equality (==)
// Compares only values after type coercion.
console.log("Harshi" == "Harshi");    // true
// console.log("25" == 25);           // true (type conversion occurs)

// ------------------------------
// Logical Operators
// ------------------------------

let value = true;

// Logical NOT (!)
// console.log(!value); // false

// Check if a number is divisible by both 2 and 5.
let num = 10;

if (num % 2 == 0 && num % 5 == 0) {
    console.log(num + " is a multiple of both 2 and 5");
} else if (num % 2 == 0 || num % 5 == 0) {
    console.log(num + " is a multiple of either 2 or 5");
} else {
    console.log(num + " is not a multiple of 2 or 5");
}

// ------------------------------
// Assignment Operators
// ------------------------------

// += adds the value and assigns the result back to the variable.
console.log(a += 5);

// Equivalent to: b = b + 5;
console.log(b = b + 5);

/*
Assignment Operators:
=   -> Assignment
+=  -> Add and assign
-=  -> Subtract and assign
*=  -> Multiply and assign
/=  -> Divide and assign
%=  -> Modulus and assign
*/

// ------------------------------
// Increment and Decrement Operators
// ------------------------------

console.log("Current Value of c: " + c);

// Post-increment (++)
// Increases the value by 1.
c++;
console.log("After Increment: " + c);

console.log("Current Value of d: " + d);

// Post-decrement (--)
// Decreases the value by 1.
d--;
console.log("After Decrement: " + d);

/*
Comparison Operators:
>   -> Greater than
<   -> Less than
>=  -> Greater than or equal to
<=  -> Less than or equal to
==  -> Loose equality (compares values only)
=== -> Strict equality (compares value and data type)

Logical Operators:
&&  -> Logical AND
||  -> Logical OR
!   -> Logical NOT
*/