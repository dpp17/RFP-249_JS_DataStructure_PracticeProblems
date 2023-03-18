const prompt = require("prompt-sync")();

const partTimeHrs = 4;
const fullTimeHrs = 8;
const wagePerHrs = 20;
const daysInMonth = 20;
var totalWageForMonth = 0;

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

function getWageForMonth(option){
    for(var i=1; i <= daysInMonth; i++){
    totalWageForMonth = totalWageForMonth + getWage(option);
    }
    return totalWageForMonth;
}

console.log("Employees Wage :: " + getWageForMonth(prompt("Press:1 => Part_Time  or  Press:2 => Full_Time :: ")));