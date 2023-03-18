const prompt = require("prompt-sync")();

const partTimeHrs = 4;
const fullTimeHrs = 8;
const checkHrs = 160;
const checkDays = 20;
const wagePerHr = 20;

var check = 0;
var days = 0;
var hrs = 0;

let employeeArr = new Array();

function calculateDailyWage(getHrs){
    return getHrs * wagePerHr;
}

function getHrs(option){
    switch (option) {
        case "1":
            console.log(checkHrsOrDaysReachFirst(partTimeHrs))
            if(days == 20) console.log(" Max days Reached First :: ");
            else if(hrs == 160) console.log(" Max hrs Reached First :: ");
            break;
        case "2":
            console.log(checkHrsOrDaysReachFirst(fullTimeHrs))
            if(days == 20) console.log(" :: Max days Reached First :: ")
            else if(hrs == 160) console.log(" :: Max hrs Reached First :: ")
            break;
        default:
        console.log(" ----- :: Invalid Input :: -----")
    }
}

function checkHrsOrDaysReachFirst(hr){
    while(check != 1){
        hrs = hrs + hr;
        if(hrs%hr == 0){
            days++;
        }if(days == checkDays){
            check = 1;
        }if(hrs == checkHrs){
            check = 1;
        }
        employeeArr.push(calculateDailyWage(hr));
    }
    return "Total Hrs :: " + hrs + "  Total Days :: " + days
}

getHrs(prompt("Press:1 => Part_Time  or  Press:2 => Full_Time :: "))

console.log("[ "+employeeArr+" ] ");


//a. Calc total Wage using Array forEach or reduce method
var sum = 0 ;
function totalWage(){
    employeeArr.forEach(data => sum = sum + data)
    return sum;
}

console.log(" Total Wage :: " + totalWage() + '\n')


//b. Show the Day along with Daily Wage using Array map helper function
let index = 0;
function mapArrHelper(wage){
    index++;
    return " "+index +" = "+wage
}

let mapDayWithWageArr = employeeArr.map(mapArrHelper);

console.log(" Daily Map Array :: " + mapDayWithWageArr + '\n');

//c. Show Days when Full time wage of 160 were earned using filter function
function findFullTImeWage(wage){
    return wage.includes("160")
}
let fullTimeWageArr = mapDayWithWageArr.filter(findFullTImeWage)
console.log(" Daily wage filter when FullTime Wage earned :: " + fullTimeWageArr + '\n')

//d. Find the first occurrence when Full Time Wage was earned using find function

console.log(" First Time FullTime Wage earned on Day: "+ mapDayWithWageArr.find(findFullTImeWage) + '\n')

//e. Check if Every Element of Full Time Wage is truly holding Full time wage
console.log(" Check All Element have Full Time Wage :: " + fullTimeWageArr.every(findFullTImeWage) + '\n')

//f. Check if there is any Part Time Wage
function isPartTImeWage(wage){
    return wage.includes("80")
}

console.log(" Check if any Part Time Wage :: " + fullTimeWageArr.some(isPartTImeWage) + '\n')

//g. Find the number of days the Employee Worked
function totalDaysEmployeeWork(numberOfDays, wage){
    if(wage > 0) return numberOfDays+1;
    return numberOfDays;
}
console.log(" Number of Days Employee Worked :: " + employeeArr.reduce(totalDaysEmployeeWork,0))
