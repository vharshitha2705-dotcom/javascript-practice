// -------------------------------------
// Promise Chaining Example
// -------------------------------------

const fetchUser = new Promise((resolve) => {

    resolve({
        id: 101,
        name: "Harshitha"
    });

});

fetchUser
    .then((user) => {

        console.log("User Details:", user);

        return user.name;

    })
    .then((name) => {

        console.log("User Name:", name);

    })
    .catch((error) => {

        console.log(error);

    });