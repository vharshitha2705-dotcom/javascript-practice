// -------------------------------------
// Nested Destructuring in JavaScript
// -------------------------------------

// Nested destructuring is used when
// objects or arrays contain other
// objects or arrays.

const employee = {
    id: 101,
    name: "Harshitha",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500001
    },
    skills: ["JavaScript", "Playwright", "SQL"]
};

// Destructure nested object
const {
    address: { city, state }
} = employee;

console.log("City:", city);
console.log("State:", state);

// Destructure nested array
const {
    skills: [skill1, skill2]
} = employee;

console.log("Skill 1:", skill1);
console.log("Skill 2:", skill2);