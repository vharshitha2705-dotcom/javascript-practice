// ==================================================
// ARRAY HIGHER-ORDER METHODS
// These methods help us process arrays efficiently
// without using traditional loops.
// ==================================================


// Original Array
let array1 = [15, 16, 17, 18]


// --------------------------------------------------
// REDUCE METHOD
// Used to reduce all array elements into a single value
// such as Sum, Product, Maximum, Minimum, etc.
// --------------------------------------------------

// Syntax:
// array.reduce((accumulator, currentValue) => {}, initialValue)

// Here:
// sum -> accumulator (stores running total)
// array1val -> current array element
// 0 -> initial value of sum

let array1Sum = array1.reduce(
    (sum, array1val) => sum + array1val,
    0
)

console.log(array1Sum)

// Calculation:
// 0 + 15 = 15
// 15 + 16 = 31
// 31 + 17 = 48
// 48 + 18 = 66

// Output: 66
