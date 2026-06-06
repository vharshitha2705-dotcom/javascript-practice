// --------------------------------------------------
// MAP METHOD
// Used to transform each element of an array.
// Returns a new array of the same length.
// --------------------------------------------------

let array1 = [15, 16, 17, 18]

let evenArray1 = array1.filter(
    array1val => array1val % 2 == 0
)

// Multiply each even number by 2

let evenMultipleArray1 = evenArray1.map(
    evenArray1Val => evenArray1Val * 2
)

console.log(evenMultipleArray1)

// Output:
// [32, 36]
