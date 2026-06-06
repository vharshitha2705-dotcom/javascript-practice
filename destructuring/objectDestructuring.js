// -------------------------------------
// Object Destructuring in JavaScript
// -------------------------------------

// Object destructuring allows you to extract
// properties from an object into variables.

const student = {
    name: "Harshitha",
    age: 25,
    city: "Hyderabad",
    course: "QA Automation"
};

// Destructuring
const { name, age, city } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Rename variables while destructuring
const { course: learning } = student;

console.log("Course:", learning);