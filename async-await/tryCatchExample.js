// -------------------------------------
// Async/Await with Try...Catch
// -------------------------------------

function login() {

    return new Promise((resolve, reject) => {

        let success = false;

        if (success) {
            resolve("Login Successful");
        } else {
            reject("Invalid Credentials");
        }

    });

}

async function checkLogin() {

    try {

        const result = await login();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

checkLogin();