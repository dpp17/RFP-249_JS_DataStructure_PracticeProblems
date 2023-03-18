/*
Ques::
Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
*/


const arr = [];

function getRepeatDigits(tempNUmberOne){
    var firstDigit = tempNUmberOne%10
    var restDigit_s = Math.floor(tempNUmberOne/10)
    // console.log(restDigit_s);
    if(firstDigit == restDigit_s && tempNUmberOne!=0){ 
        arr.push(tempNUmberOne)
    }
}

for(var i=0;i<=100;i++){
    getRepeatDigits(i);
}

console.log("Repeat Digit Array :: [" + arr +"]");