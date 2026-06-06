// -------------------------------------
// Throwing a Custom Error
// -------------------------------------

function withdraw(amount) {

    if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than 0.");
    }

    console.log("Withdrawal successful:", amount);

}

try {

    withdraw(-500);

} catch (error) {

    console.log("Error:", error.message);

}