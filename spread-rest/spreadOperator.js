// -------------------------------------
// Spread Operator (...) in JavaScript
// -------------------------------------

// The spread operator expands the elements
// of an array or object.

// -------------------------------------
// Spread with Arrays
// -------------------------------------

const numbers = [10, 20, 30];

// Create a new array by spreading the existing array
const newNumbers = [...numbers, 40, 50];

console.log("Original Array:", numbers);
console.log("New Array:", newNumbers);


// -------------------------------------
// Combine Two Arrays
// -------------------------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log("Combined Array:", combinedArray);


// -------------------------------------
// Spread with Objects
// -------------------------------------

const student = {
    name: "Harshitha",
    age: 25
};

const updatedStudent = {
    ...student,
    city: "Hyderabad"
};

console.log(updatedStudent);


// -------------------------------------
// Copy an Array
// -------------------------------------

const fruits = ["Apple", "Banana"];

const copiedFruits = [...fruits];

console.log(copiedFruits);