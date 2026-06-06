// -------------------------------------
// Multiple Await Example
// -------------------------------------

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User Details");

        }, 1000);

    });

}

function getOrders() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Order Details");

        }, 1000);

    });

}

async function displayInformation() {

    const user = await getUser();
    console.log(user);

    const orders = await getOrders();
    console.log(orders);

}

displayInformation();