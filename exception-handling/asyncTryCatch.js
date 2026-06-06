// -------------------------------------
// Async/Await with Try...Catch
// -------------------------------------

function fetchUser() {

    return new Promise((resolve, reject) => {

        let userFound = false;

        if (userFound) {
            resolve("User found");
        } else {
            reject("User not found");
        }

    });

}

async function getUser() {

    try {

        const result = await fetchUser();

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

}

getUser();