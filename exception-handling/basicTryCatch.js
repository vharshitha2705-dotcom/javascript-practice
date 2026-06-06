// -------------------------------------
// Basic Try...Catch Example
// -------------------------------------

// The try block contains code that may throw an error.
// The catch block handles the error if one occurs.

try {

    let result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("An error occurred:", error.message);

}

console.log("Program completed.");