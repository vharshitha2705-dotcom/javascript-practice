// -------------------------------------
// find() - Finds the First Match
// -------------------------------------

const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Harshitha" },
    { id: 3, name: "David" }
];

const employee = employees.find(emp => emp.id === 2);

console.log(employee);