// Display in the console the numbers from 1 to 20
let i;

for ( i = 1; i <= 20; i++){
	console.log(i);
}

// Display in the console the odd numbers
//from 1 to 20
let i;

for ( i = 1; i <= 20; i++){
	if ( i % 2 !== 0){
		console.log(i);
	}
}

/*Compute the sum of the elements of an array and 
display it in the console (add all numbers in the 
array together)*/


let sumNumbers = [23, 43, 56, 12, 4];
let sumAnswer = 0;
let i;

for (i = 0; i < sumNumbers.length; i++){
    sumAnswer = sumAnswer + sumNumbers[i];
}

console.log(sumAnswer);



/*Compute the maximum of the elements of an array
 and display it in the console (am facut-o impreuna)
*/

let arrNumbers = [12, 231, 2342, 423, 532];
let max = 0;
let i;

for (i = 0; i < arrNumbers.length; i++){
	if (max < arrNumbers[i]){
		max = arrNumbers[i];
	}
}

console.log(max);


/*
Compute how many times a certain element appears
 in an array (count the number of times one element
 of your choice is in the array)
*/

let arrNumbers = [12, 231, 2342, 12, 423, 532, 12];
let myElement = 12;
let xTimes = 0 ;
let i;

for (i = 0; i < arrNumbers.length; i++){
	if (myElement === arrNumbers[i]){
		xTimes = xTimes + 1;
	}
}

console.log(xTimes);