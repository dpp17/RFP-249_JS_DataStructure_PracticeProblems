const prompt = require("prompt-sync")();

const partTimeHrs = 4;
const fullTimeHrs = 8;
const wagePerHrs = 20;

function getWage(option){
    switch (option) {
        case "1":
            return partTimeHrs * wagePerHrs;
            break;
        case "2":
            return fullTimeHrs * wagePerHrs;
            break;
        default:
        console.log(" ----- :: Invalid Input :: -----")
    }
}

console.log("Employees Wage :: " + getWage(prompt("Press:1 => Part_Time  or  Press:2 => Full_Time :: ")));
