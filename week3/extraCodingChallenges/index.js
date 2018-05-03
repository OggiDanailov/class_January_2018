// write a function that takes a sentence as an argument and aways returns the penultimate word in it with 
// .jpg attached to it.
// Example:
// "This is another day of my lovely life" - > lovely.jpg

// function penultime(phrase){
// 	var a = phrase.split(" ")
// console.log(a[a.length-2] + ".jpg")
// }

// 2. write a method that gives you random names from an array in JS 

// function randomize(array){
// var a = Math.floor(Math.random() * array.length)

// console.log(array)
// }


 // 3. Create a function that takes a number. Return true if the given  number is a multiple of 3 or 5, but not both. Example:
// eitherNum( 6 ) -> true
// eitherNum( 10 ) -> true
// eitherNum( 15 ) -> false



// 4.// Write a function that takes an array of arrays as an argument and returns
 // an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.

     // For example:
//  var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];
// function arrayToObj(arrayOfArrays) {   
//     var returningObj = {};
//     arrayOfArrays.forEach(function(innerArray) {
//         var key = innerArray[0];
//         var value = innerArray[1];
//         returningObj[key] = value;
//     });
//     return returningObj;
// }
// arrayToObj(houseWords); 

// Using indexOf and splice() create a function that takes an array as an argument and removes a given item from the array;
// EX. var names = ["Beatles", "rolling stones", "Pink Floyd", "Kinks", "Who", 'Kiss', "Jimi Hendrix", "Yes"] - you check if 
// Kiss is in the array and you remove it

var names = ["Oggi", "Boro", "jordan", "Spas"]


function name(array){
	if(array.indexOf("Oggi") !== -1){
		var position = array.indexOf("Oggi")
	}
	array.splice(array[position], 1)
	return array
}












