// Variable Declaration using var
var firstname = 'Harshitha';

// Variable Declaration using let
let lastname = 'Veeravalli';

// Constant Declaration using const
const age = 25;

console.log("After Declaration: " + firstname);
console.log("After Declaration: " + lastname);
console.log("After Declaration: " + age);

// Reassignment
firstname = "Haritha";
lastname = "Godaba";

// const variables cannot be reassigned
// age = 24;

console.log("After Reassignment: " + firstname);
console.log("After Reassignment: " + lastname);

// Redeclaration
var firstname = "Hanshitha";

// let variables cannot be redeclared in the same scope
// let lastname = "Palakoti";

// const variables cannot be redeclared
// const age = 26;

console.log("After Redeclaration: " + firstname);

/*
Summary:

var   -> Can be reassigned and redeclared.
         Function-scoped.

let   -> Can be reassigned but cannot be redeclared in the same scope.
         Block-scoped.

const -> Cannot be reassigned or redeclared.
         Block-scoped.
*/