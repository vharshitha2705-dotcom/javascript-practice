// ==================================================
// ARRAYS IN JAVASCRIPT
// Arrays are used to store multiple values in a
// single variable.
// Index positions start from 0.
// ==================================================


// --------------------------------------------------
// Creating an Array
// --------------------------------------------------

// Creates an empty array with size 6
// (elements are undefined initially)
var marks = Array(6)

// Creates an array using the Array constructor
var marks = new Array(20, 30, 40, 50, 60, 90)

// Most commonly used array declaration method
var marks = [80, 70, 60, 50, 90, 70]


// Print the entire array
console.log(marks)


// --------------------------------------------------
// Accessing Elements
// --------------------------------------------------

// Arrays use zero-based indexing
// Index: 0  1  2  3  4  5
// Value:80 70 60 50 90 70

// Print element at index 5
console.log(marks[5])

// --------------------------------------------------
// Traversing an Array Using a For Loop
// Calculate the total sum of all elements
// --------------------------------------------------

let sum = 0

// Loop through each element in the array
for (let i = 0; i < marks.length; i++) {

    // Print current element
    console.log(marks[i])

    // Add current element to sum
    sum = sum + marks[i]
}

// Print total of all array elements
console.log("Total Marks : " + sum)


// --------------------------------------------------
// Example Calculation
// Array = [56, 80, 70, 60, 50, 90, 70]
//
// Sum Calculation:
// 56 + 80 + 70 + 60 + 50 + 90 + 70
// = 476
// --------------------------------------------------

