// --------------------------------------------------
// FILTER METHOD
// Used to select elements that satisfy a condition.
// Returns a new array.
// --------------------------------------------------

let array1 = [15, 16, 17, 18]

// Select only even numbers

let evenArray1 = array1.filter(
    array1val => array1val % 2 == 0
)

console.log(evenArray1)

// Output:
// [16, 18]
