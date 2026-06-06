// -------------------------------------
// Try...Catch...Finally Example
// -------------------------------------

try {

    console.log("Inside try block");

    throw new Error("Something went wrong!");

} catch (error) {

    console.log("Caught Error:", error.message);

} finally {

    console.log("Finally block always executes.");

}