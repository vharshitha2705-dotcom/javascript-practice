// -------------------------------------
// Promise Resolve Example
// -------------------------------------

const loginPromise = new Promise((resolve) => {

    resolve("User Logged In Successfully");

});

loginPromise
    .then((result) => {
        console.log(result);
    });