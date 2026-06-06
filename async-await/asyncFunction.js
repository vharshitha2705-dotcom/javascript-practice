// -------------------------------------
// Async Function Example
// -------------------------------------

async function getUser() {

    return {
        id: 101,
        name: "Harshitha"
    };

}

getUser().then((user) => {
    console.log(user);
});