/*
Ques::
Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
*/

var numberOne = Math.floor(Math.random()*100);
const arr = [];
function getfactors(tempNumberOne){
    for(var i =1;i<=tempNumberOne ;i++)
    if(tempNumberOne%i == 0){
        getPrimeFactors(i)
    }
}

function getPrimeFactors(tempNumber){
    var count=0;
    for(var i =1;i<tempNumber ;i++)
    if(tempNumber%i == 0){
        count++;
    }
    if(count == 1){
        arr.push(i);
    }
}
getfactors(numberOne);

console.log("Input Number :: " + numberOne);
console.log("----------------------------");
console.log("Resultant Array :: [" + arr +"]")
