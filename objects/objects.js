// ==================================================
// OBJECTS IN JAVASCRIPT
// Objects are used to store data in the form of
// key-value pairs.
//
// Syntax:
// {
//    key1 : value1,
//    key2 : value2
// }
// ==================================================


// --------------------------------------------------
// Creating an Object
// --------------------------------------------------

let student1 = {

    // Properties (Data Members)
    firstName: 'Harshitha',
    lastName: 'Veeravalli',
    age: 25,

    // Method (Function inside an Object)
    fullName: function () {

        // 'this' refers to the current object
        return this.firstName + ' ' + this.lastName
    }
}


// Print the complete object
console.log(student1)


// --------------------------------------------------
// Accessing Object Properties
// --------------------------------------------------

// Dot notation is commonly used to access values

console.log(student1.firstName)
console.log(student1['age'])

// Output:
// Harshitha
// 25



// --------------------------------------------------
// Updating Existing Property
// --------------------------------------------------

// Modify the value of an existing property

student1.age = 26

console.log(student1.age)

// Output:
// 26



// --------------------------------------------------
// Adding New Properties
// --------------------------------------------------

// New properties can be added dynamically

student1.gender = 'Female'

console.log(student1)


// Output:
// {
//   firstName: 'Harshitha',
//   lastName: 'Veeravalli',
//   age: 26,
//   gender: 'Female'
// }



// --------------------------------------------------
// Calling an Object Method
// --------------------------------------------------

// Execute the function stored inside the object

console.log(student1.fullName())

// Output:
// Harshitha Veeravalli



// --------------------------------------------------
// Removing a Property
// --------------------------------------------------

// delete keyword removes a property completely

delete student1.age

console.log(student1)


// Output:
// age property is removed



// --------------------------------------------------
// Checking Property Existence
// --------------------------------------------------

// 'in' operator checks whether a property exists

console.log('firstName' in student1)

// Output:
// true


console.log('age' in student1)

// Output:
// false



// --------------------------------------------------
// Iterating Through Object Properties
// --------------------------------------------------

// for...in loop is used to iterate through
// all keys of an object

for (let key in student1) {

    // key -> property name
    // student1[key] -> property value

    console.log(student1[key])
}


// Example Output:
// Harshitha
// Veeravalli
// Female
// Harshitha Veeravalli (if method is executed)
// (function definition if method itself is printed)