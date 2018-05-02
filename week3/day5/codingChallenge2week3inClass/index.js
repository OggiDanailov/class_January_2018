// 1. Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9],
 // your function should return [4, 6].

//  	function listArray (array1){
//  		var evenArray=[];
//  		for(let i=0; i< array1.length; i++) {
//  			if(array1[i] % 2 == 0 ){
//  				evenArray.push(array1[i])
//  			}
//  		}
//  		console.log(evenArray)
//  	}
// listArray([1,3,12,6,4])

//  2.
// Create a function that takes two arrays, each having elements that are numbers.
//  Compare the sum of the numbers in each array. Return the array with the largest sum:

// var array1 = [1,54,65,345,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
// var array2 = [ 123, 234,789,56,345,65,34,456,23,543,2,345,23,45,2,234,3,234, 434]

// function largest(array1, array2){
// 	var sum1 =0;
// 	var sum2 =0;
// 	var array1 = [1,54,65,345,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
// 	var array2 = [ 123, 234,789,56,345,65,34,456,23,543,2,345,23,45,2,234,3,234, 434]

// 	for(let i=0; i<array1.length;i++){
// 		sum1 += parseInt (array1[i])
// 	}
// 	for(let i=0; i<array2.length;i++){
// 		sum2 += parseInt (array2[i])
// 	}

// 	if(sum1>sum2){
// 		console.log(array1 + " is larger with a sum of " +sum1)
// 	}else{
// 		console.log(array2 + " is larger with a sum of " +sum2)
// 	}
	
// }



// 3. Write a program that prints the numbers from 1 to 100. For multiples
//  of three print “Rick” instead of the number and for the multiples of 
//  five print “Roll”. For numbers which are multiples of both three and
//   five print "RickRoll".

// for(let i=1; i<=100; i++){
// 	if(i % 3 === 0 && i % 5 === 0){
// 		console.log("RickRoll")
// 	}else if(i % 5 === 0){
// 		console.log("Roll")
// 	}else if(i % 3 === 0){
// 		console.log("Rick")
// 	}else{
// 		console.log(i)
// 	}
// }






// 4. Create a function that takes 2 numbers as arguments. 
// Return true if there is a digit that appears in both numbers.
//  Example: // sameDigit(5, 65) -> true // sameDigit(23, 82) -> true 
//  // sameDigit(85, 49) -> false
// 854
// '854'
// ['8','5','4']

// function checkDigits(num1, num2){
// 	var digits1 = num1.toString().split('');
// 	var digits2 = num2.toString().split('');
// 	for(let i=0; i<digits1.length; i++){
// 		for(let j=0; j<digits2.length; j++){
// 			if(digits1[i] == digits2[j]){
// 				console.log(true);
// 			} else{
// 				console.log(false);
// 			}
// 		}
// 	}
// }
// checkDigits(32, 1234);

// var array = ["a", "b", "c"]
// var array2 = [1,2,3,4]

// for(let i = 0;i<array.length;i++){
// 	for(let j = 0;j<array2.length;j++){
// 		console.log(array[i] + " " + array2[j])
// 	}
// }






// 5. Write a function that in each second with math.random gives you a number between
//  1 to 100. If the number is even print 'even' on the screen plus the number and
//   changes the background color to red; if the number is odd print 'whatever' on
//    the screen plus the number plus changes the background color to green


// setInterval (function () {
// 	var number = Math.floor(Math.random()*100) 
// 	if ( number % 2 == 0)
// 		{console.log("Even " + number); 
// 		 document.getElementById("bodyName").style.backgroundColor="red"}
// 	else {console.log("Odd " + number); 
// 		 document.getElementById("bodyName").style.backgroundColor="green"}
// },1000 ) 
























