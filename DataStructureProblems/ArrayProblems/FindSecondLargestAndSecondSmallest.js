/*
Ques::
Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
*/


let empArr = new Array();

for(var i = 0;i< 10;i++)
{
    empArr.push( Math.floor(Math.random()*1000))
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
		console.log(" Second largest :: " + secondLargest);	