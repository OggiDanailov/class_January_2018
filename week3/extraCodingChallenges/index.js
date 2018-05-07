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

// Using indexOf and splice() create a function that takes an array and a name as an argument and removes a given item from the array if it is there;
// EX. var names = ["Beatles", "rolling stones", "Pink Floyd", "Kinks", "Who", 'Kiss', "Jimi Hendrix", "Yes"] - you check if 
// "Kiss" is in the array and you remove it

// var names = ["Oggi", "Boro", "jordan", "Spas"]


// function name(array){
// 	if(array.indexOf("Oggi") !== -1){
// 		var position = array.indexOf("Oggi")
// 	}
// 	array.splice(array[position], 1)
// 	return array
// }

// 1. Write a method that takes two arguments = a long string and a word and substitute all instances of a given word with the word you are passing. EX:
// var text = "Today the boy woke up yearly; he left the house and went to school. There the boy studied math for couple of hours. The boy knew it will be hard but the boy didn't expect to be that hard. The boy felt that this field may not be promising. The boy decided to try a new career - a boyscout leader, lawyer, rapper or something similar."

// you have to substitute all instances of 'boy' with 'girl'



// function subs(text, arg1, arg2){
// 	var textArray = text.split(" ")
// 	for(let i = 0;i<textArray.length;i++){
// 		if(textArray[i].indexOf(arg1) !== -1){
// 			textArray.splice(i, 1, arg2)

// 		}
// 	}
// 	return textArray.join(" ")
// }












