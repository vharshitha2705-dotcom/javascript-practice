// JavaScript is a loosely typed language.
// The data type of a variable is determined by the value assigned to it.

// String Declaration
let name = "Rahul";

// Number Declaration
const age = 25;

// Boolean Declaration (true or false)
let boolValue = true;

// Variable assigned with null
// null represents the intentional absence of a value.
let gender = null;

// Variable declared without assigning a value
// Its default value is undefined.
let address;

// Array Declaration
const city = ["Vizag", "Hyd", "Vjy"];

// Object Declaration
const fullname = {
    firstName: "Rahul",
    lastName: "Malhotra"
};

// Date Object Declaration
const date = new Date("2022-03-25");

// Checking the data type using typeof operator
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof boolValue);  // boolean

// typeof null returns "object" 
console.log(typeof gender);     // object

// Arrays are also objects in JavaScript
console.log(typeof city);       // object

// Regular object
console.log(typeof fullname);   // object

// Date is a built-in object
console.log(typeof date);       // object

// Variable declared without a value
console.log(typeof address);    // undefined