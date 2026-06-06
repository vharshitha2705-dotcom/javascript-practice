// -------------------------------------
// Await Example
// -------------------------------------

// Function that returns a Promise
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data received successfully");

        }, 2000);

    });

}

// Async function
async function displayData() {

    console.log("Fetching data...");

    const result = await fetchData();

    console.log(result);

}

displayData();