// --------------------------------------------------
// slice() - Extract a Portion of an Array
// --------------------------------------------------

// Syntax:
// array.slice(startIndex, endIndex)

// - Returns a NEW array containing the selected elements.
// - Does NOT modify the original array.
// - The element at startIndex is included.
// - The element at endIndex is NOT included.

var marks = [80, 70, 60, 50, 90, 70]

console.log("Complete Array: " + marks);
console.log("Sliced Portion: " + marks.slice(2, 4));


