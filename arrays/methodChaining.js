// --------------------------------------------------
// METHOD CHAINING
// Combining filter(), map(), and reduce()
// into a single statement.
// --------------------------------------------------

let array1 = [15, 16, 17, 18]

let newArray = array1

    // Step 1: Get only even numbers
    .filter(array1val => array1val % 2 == 0)

    // Step 2: Multiply each even number by 2
    .map(evenArray1Val => evenArray1Val * 2)

    // Step 3: Add all values together
    .reduce((sum, array1val) => sum + array1val, 0)

console.log(newArray)


// Detailed Execution:
//
// Original Array:
// [15, 16, 17, 18]
//
// After filter():
// [16, 18]
//
// After map():
// [32, 36]
//
// After reduce():
// 32 + 36 = 68
//
// Output:
// 68

