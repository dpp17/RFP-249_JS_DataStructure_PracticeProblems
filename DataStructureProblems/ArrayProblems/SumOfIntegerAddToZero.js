/*
Ques::
Write a Program to show Sum of three Integer adds to ZERO
*/
const arr = [-1,2,-3,1,-2,3,2,1,4];

function checkSumOfThreeIsZero(){
    for(var i=0;i<arr.length;i++){
        for(var j = i+1;j<arr.length;j++){
            for(var k=j+1;k<arr.length;k++){
                var sum = arr[i]+arr[j] + arr[k]
                if(sum == 0){
                    console.log(arr[i]+ ", " +arr[j] + ", " + arr[k])
                }
            }
        }
    }
}

checkSumOfThreeIsZero();