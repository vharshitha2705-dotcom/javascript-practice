// -------------------------------------
// Basic Promise in JavaScript
// -------------------------------------

// A Promise represents the eventual
// completion or failure of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {

    let paymentSuccessful = false;

    if (paymentSuccessful) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }

});

// Handling the promise

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });