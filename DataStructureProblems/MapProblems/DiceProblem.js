/*
Ques::
Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times
*/

var mydict = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
} 
let value = 0
    console.log(mydict);

    function getDiceRoll(){
        return Math.floor(Math.random()*10)%6 + 1

    }

console.log(getDiceRoll());
    

for(var i=0;i<10;i++){
        var key = getDiceRoll();
        // console.log(key);
        value = mydict[key];
        // console.log(value + "value");
        value++;
        mydict[key]= value;
    }

console.log(mydict);

var minVal = mydict[1];
var min = 1;
var maxVal = mydict[1]
var max = 1;


for(var i=1; i<6; i++){

    var current = mydict[i]
    var next = mydict[i+1]

    //minimum
    if(current <= next && current <= minVal ){
        minVal = current
        min = i
    }else if(next <= minVal){
        minVal = next
        min = i+1
    }

    //maximum
    if(current >= next && current >= maxVal ){
        console.log(maxVal);
        maxVal = current
        max = i
    }else if(next >= maxVal){
        maxVal = next
        max = i+1
    }
}

console.log("Minimum ::-- " + min + " : " + minVal)
console.log("Maximum ::-- " + max + " : " + maxVal)
