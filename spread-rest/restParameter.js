// -------------------------------------
// Rest Parameter (...) in JavaScript
// -------------------------------------

// The rest parameter collects multiple
// arguments into a single array.

// -------------------------------------
// Example 1
// -------------------------------------

function add(...numbers) {

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));


// -------------------------------------
// Example 2
// -------------------------------------

function displayDetails(name, ...skills) {

    console.log("Name:", name);
    console.log("Skills:", skills);

}

displayDetails(
    "Harshitha",
    "JavaScript",
    "Playwright",
    "SQL"
);