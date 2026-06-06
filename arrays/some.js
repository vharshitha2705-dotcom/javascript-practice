// -------------------------------------
// some() - Checks if Any Element Matches
// -------------------------------------

const marks = [85, 70, 90, 25];

const hasFailedStudent = marks.some(mark => mark < 35);

console.log(hasFailedStudent);