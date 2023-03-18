/*
. Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/


let empArr = new Array();

for(var i = 0;i< 10;i++)
{
    empArr.push(Math.floor(Math.random()*1000))
}

var largest = empArr[0];
var secondLargest = 0;
var smallest = empArr[0];
var secondsmallest = 0;
		for(var i = 1; i < empArr.length;i++) {
			if(empArr[i] >= largest) {
				secondLargest = largest;
				largest = empArr[i];
			}if(empArr[i] >= secondLargest && empArr[i] < largest) {
				secondLargest = empArr[i];
			}
			if(empArr[i] <= smallest) {
				secondsmallest = smallest;
				smallest = empArr[i];
			}if(empArr[i] <= secondsmallest && empArr[i] > smallest) {
				secondsmallest = empArr[i];
			}
		}
		console.log(" Second Smallest :: " + secondsmallest);
		console.log(" Second largest :: " + secondLargest)