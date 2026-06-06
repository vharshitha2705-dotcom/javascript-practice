// -------------------------------------
// Promise Reject Example
// -------------------------------------

const orderPromise = new Promise((resolve, reject) => {

    let orderPlaced = false;

    if (orderPlaced) {
        resolve("Order Placed");
    } else {
        reject("Order Failed");
    }

});

orderPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });