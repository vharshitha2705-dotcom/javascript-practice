// -------------------------------------
// Basic Async/Await Example
// -------------------------------------

// The 'async' keyword makes a function
// return a Promise automatically.

async function greet() {
    return "Hello, World!";
}

greet().then((message) => {
    console.log(message);
});