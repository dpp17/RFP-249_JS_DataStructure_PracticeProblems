const prompt = require("prompt-sync")();

const partTimeHrs = 4;
const fullTimeHrs = 8;
const wagePerHrs = 20;

var empWage;
switch (prompt("Press:1 => Part_Time  or  Press:2 => Full_Time :: ")) {
    case "1":
        empWage = partTimeHrs * wagePerHrs;
        break;
    case "2":
        empWage = fullTimeHrs * wagePerHrs;
        break;
    default:
    console.log(" ----- :: Invalid Input :: -----")
}
console.log("Employees Wage :: " + empWage);
