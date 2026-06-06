// ==================================================
// TYPE CONVERSION
// ==================================================

let date1 = '27'
let date2 = '30'


// parseInt() converts string to integer
let dateDiff = parseInt(date2) - parseInt(date1)

console.log(typeof(dateDiff))

// Output:
// number


// Convert number back to string
console.log(typeof(dateDiff.toString))

/*
Output:
string
*/



// ==================================================
// NUMBER CONVERSION METHODS
// ==================================================

let decimalNum = 300.57


// parseInt()
// Removes decimal portion and keeps only integer
console.log(parseInt(decimalNum))

// Output:
// 300


// parseFloat()
// Returns the floating-point number
console.log(parseFloat(decimalNum))

// Output:
// 300.57