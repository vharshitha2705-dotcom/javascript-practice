// ==================================================
// SORTING ARRAYS
// The sort() method is used to arrange elements
// in a specific order.
// ==================================================


// --------------------------------------------------
// SORTING STRING ARRAYS
// By default, sort() arranges strings in
// alphabetical (lexicographical) order.
// --------------------------------------------------

let array2 = ["Gowtham", "Manik", "Arjun", "Viraj"]

// Sort names alphabetically (A → Z)
console.log(array2.sort())

// Output:
// ["Arjun", "Gowtham", "Manik", "Viraj"]


// reverse() reverses the current order of elements
// Here it converts alphabetical order into reverse
// alphabetical order (Z → A)
console.log(array2.reverse())

// Output:
// ["Viraj", "Manik", "Gowtham", "Arjun"]



// ==================================================
// SORTING NUMBER ARRAYS
// ==================================================

let array3 = [678, 9065, 78, 4, 7889]

// --------------------------------------------------
// IMPORTANT:
// By default, JavaScript converts numbers to strings
// before sorting, which may produce unexpected results.
//
// Example:
// [4, 78, 678, 7889, 9065]  ← Expected
//
// Default sort compares as strings:
// "4", "678", "78", "7889", "9065"
// --------------------------------------------------


// --------------------------------------------------
// ASCENDING ORDER (Smallest → Largest)
// --------------------------------------------------

// Comparator Function:
// a - b
//
// If result < 0 → a comes before b
// If result > 0 → b comes before a
// If result = 0 → no change

console.log(array3.sort((a, b) => a - b))

// Output:
// [4, 78, 678, 7889, 9065]



// --------------------------------------------------
// DESCENDING ORDER (Largest → Smallest)
// --------------------------------------------------

// Comparator Function:
// b - a
//
// Larger values are placed first

console.log(array3.sort((a, b) => b - a))

// Output:
// [9065, 7889, 678, 78, 4]