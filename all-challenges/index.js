// 1. Very easy challenges:

// day 1
// 1. write a function that takes an array as an argument and lists all the items in this array.
// 2. write a function that takes two arguments, adds them and checks if the output is bigger than 100;
//   if it is bigger it consoles "it is bigger than 10"; if not, it consoles "it is not bigger than 10"
// 3. Create an object literal called person; give some key value pairs as firstName and lastName; finally print the length of the firstName and the lastName of the object. 
// 4. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the corresponding number plus add the line 'it is an even';
// if it is odd add the line 'it is odd'
// 5. Write a function that takes two numbers as arguments; if the two numbers are even print 'they are both even numbers';
// if the two numbers are different print "there is one even and one odd"; if both numbers are odd print 'they are both odd'
// 6. wite a function that lists ONLY the odd numbers between 1 to 100
// day 2
// 1. Write a function that takes three arguments - all numbers - adds them together, split the result in 3 and displays the result on the console.

// 2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log("Sorry, no 3-divisible numbers")

// 3. Create a function that takes a string of numbers as an argument, converts it into an array and pushes this  in an empty array. Then it lists all items of this array. Google how to push an item in an empty array!!!

// 4. Create 4 boxes that have the same size but different colors.
// In these boxes (or next to them) create 4 buttons.
// When you click each button you get the corresponding box's color printed in the console.
// put the colors in an array. You have to use for loop for both the buttons and the colors in the array.

// 5. Create a function that takes a string as an argument and checks if this string is a palindrome.

// ____________________________________________________

// 1. Write a function that takes three arguments, adds them together and returns true if the sum is
// divisible by three; returns false if the sum is not divisible by three


// 2. Write a function that takes and array of numbers and adds the sum of them.

// 3. Write a function that takes a string argument and returns all the instances of vowels

// 4. Write a function that lists all the numbers from 100 to 10; write it recursively

// 5. write a small program that checks the sum of two numbers.
// If the result is even:
// 	if also the result is divisible by 5 console.log('divisible by 5 and even')
// 	if also rhe result is divisible by 6 console.log('divisible by 6 and even')
// 	if also the result is divisible by both 5 and 6 console.log('divisible by 6 and 5 and it is even')
// If the result is odd:
// 	if it is divisible by 7 console.log('divisible by 7 and odd')
// 	if it is divisible by 9 console.log('divisible by 9 and odd')
// 	if it is divisible by both 7 and 9 console.log('divisible by noth 7 and 9')

// 6. Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9, 10, 12, 13, 14], your function should return [4, 6, 10, 12, 14].

// 7. Write a function that gives you a random number between 1 to 100 in each second(setInterval).
// If the number is even console.log('this is even'); if the number is odd console.log('this is odd')


// 8. Write a function that takes a string and checks if the letter 'b' is there. Try to use indexOf() method.


// 9. write a function that checks if a given string is a palindrome.

// 10. write FizzBuzz recursivley

// 11. Write a function that takes the string "Boston is the capital of the US" as an argument and substitutes "Boston" 
// with "Washington". Try to use splice()


// 12. Create a function that takes in a string and returns a substring 4 characters long. Example:
// // subFunc("bullwinkle") -> "bull"

// 13. Create a function that takes in a string of multiple words and returns the first word with "ish" added to the end. Example:
// // ishFunc("Soup is my favorite.") -> "Soupish"

// 14. Create an array and show how to log each element to the console recursively.

// 15. Create an array. Using the .forEach() method on the array, print each element to
//  the console. If you are unsure on how to use .forEach(), Google.

// 16. Create an array. Create a function that takes an array as an argument and logs only the first element and last element to the console. Example:
// lastFirst(["dogs", "cats", "hamburger", "dinosaur"]) // dogs // dinosaur

// 17. // 1. Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true //checkNums( [30, 99, 8, 22, 7] ) -> false

// 18. Create a function that takes an array. If an array element is equal to 5, set it to 0. Example:
// noFive( [2, 17, 5, 18, 6, 5] ) -> [2, 17, 0, 18, 6, 0]

// 19. write a function that takes two arguments, adds them and checks if the output is bigger than 100;

// 20. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the number plus  add the line 'it is an even';
// if it is odd add the line 'it is odd'

// 21. Write a function that takes one argument as a string and it 
// checks if this argumement is a Palindrome (kayak);  

// function palindrome(x){  
// var temp = x.split("")  
// var array = [];  
// for(i=temp.length-1;i>=0;i--){  
// 	array.push(temp[i])  
// }  var result = array.join('')  
// if(result === x){  
// 	console.log(result + ' is a palindrome')  
// }else {  
// 	console.log(result + ' is not a palindrome')  
// }  
// }

// 22. Create a function that takes in a string and returns a substring 4 characters long. Example:
// subFunc("bullwinkle") -> "bull"
// 23. Create a function that takes in a string of multiple words and returns the first word with "ish" added to the end. Example:
// ishFunc("Soup is my favorite.") -> "Soupish"

// 24. Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true 
// checkNums( [30, 99, 8, 22, 7] ) -> false

// 25. Create a function that takes a number. Return true if the given  number is a multiple of 3 or 5, but not both. Example:
// eitherNum( 6 ) -> true 
// eitherNum( 10 ) -> true 
// eitherNum( 15 ) -> false

// 26. write a function that takes two arguments, adds them and checks if the sum is more than 100. Example:
// more_than( 50, 22 ) -> false // more_than( 10, 99 ) -> true // more_than( 15, 12 ) -> false


// 2. Easy challenges:

// 1. write a function that takes an array as an argument and 
// returns the highest number of this array

// 2. write a function that takes an array as an argument and
//  gives you the sum of this array ([1,2,3] -> 6)

// var sum;  
// for(i=0;i< 1000;i++){  
// 	if(i% 2 === 0  || i % 4 === 0){  
// 		sum += i;  
// 	}   
// }console.log(sum)  

// //////////////////// with reduce(); also you can use sort()
// var a = [1,2,3,4]  

// var sum = a.reduce(function(a, b){  
// 	return a + b;  
// }, 0)

// 3. add the sum: 

// var obj = {
// 	name: 'torture',
// 	miniObj: {
// 		name: 'Minitorture',
// 		array: [{
// 			numbers: [['a', 'b', 'c'], [1,2,3,4,5,6,7,8,9], ['fun']]
// 		}]
// 	}

// }

// var sum = 0;
// for(var i =0; i<obj.miniObj.array[0].numbers[1].length;i++){
// sum += obj.miniObj.array[0].numbers[1][i]
// }
// console.log(sum)

// 4.  Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function
 // should return [4, 6].

 // 5. Write a program that prints the numbers from 1 to 100.
 //  For multiples of three print “Rick” instead of the number and 
 //  for the multiples of five print “Roll”. For numbers which are
 //   multiples of both three and five print "RickRoll".

// 6. write a function that takes an array of names and returns a whole string of these names with comma and the word 'and' before the last name;
// ["John", "George", "James", "Anna"] ---> "John, George, James, and Anna";

// var names = ["Chris", "Oggi", "Emily"]; 

// function concatArray(namesArray) {
// 	var returningString = "";

// 	for (var i = 0; i < namesArray.length; i++) {
// 		returningString += namesArray[i];
// 		if (i < namesArray.length - 2) {
// 			returningString += ", ";
// 		} else if (i === namesArray.length - 2) {
// 			returningString += ", and ";
// 		}
// 	}

// 	return returningString; 

// 7.  // Write a function that takes an array of arrays as an argument and
 // returns an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.
  // For example:

 //  [["Dostoyevski", "Idiot"], ["Twain", "The price and the pauper"], ["Poe", "The raven"], ["Remark", "All quiet on the western front"], ["Kafka", "The trial"]];
 //  Would become: 
// {Dostoyevski: "Idiot", "Twain": "The prince and the pauper", "Poe": "The raven", "Remark": "All quiet on the western front", Kafka: "The trial" }
     
//      var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];
// ​
// function arrayToObj(arrayOfArrays) {   
//     var returningObj = {};
// ​
//     arrayOfArrays.forEach(function(innerArray) {
//         var key = innerArray[0];
//         var value = innerArray[1];

//         returningObj[key] = value;

//     });
// ​
//     return returningObj;
// }
// ​
// var houseWordsObj = arrayToObj(houseWords);


// 8.  write a function named stringy that takes a size and returns a 
// string of alternating '1s' and '0s'. the string should start with a 1.
//  a string with size 6 should return 
//  :'101010'. with size 4 should return : '1010'. with size 12 should 
//  return : '101010101010'. The size will always be positive and will only use
//   whole numbers.

// function stringy(size) {
// 	var output = ""
// 	for (i =0; i < size; i++) {
// 		if(i%2 == 0) {
// 			output += 1
// 		} else {
// 			output += 0
// 		};
// 	};
// 	return output;
// };


// 9. Given a non-negative integer, return an array containing a list
//  of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

// function numToArray(int) {
//   var str = int.toString();
//   var rev = str.split("").reverse();
//   var fin = rev.join("");
//   return fin
// }

// 10. given a string, create a function that returns the last character in that string.
// examples:
// "morning" --> g

// "winter" --> r

// result = ''
// function stringy(x){
//   result = x.split("")
//   return result[result.length-1]
// }

// stringy('whatever')

// 11. write a function that takes in a math operator as a string followed by two parameters, x and y, then
 // return the result of that math operation applied to the two parameters.
 // examples:
 // math("*", 2, 3) ---> 6
 // math("+", 4, 5) ---> 9

 // math("/", 5, 5) ---> 1

 // math("*", 4, 5) ---> 20

 // 12. Create a function that takes an array. If an array element is equal to 5, set it to 0. Example:
// noFive( [2, 17, 5, 18, 6, 5] ) -> [2, 17, 0, 18, 6, 0]

// 13. Create a function that takes two arrays, each having elements that are numbers. Compare the sum of the numbers in each array. Return the array with the largest sum. Example:
// bigArray( [1, 5, 9], [2, 12, 3] )-> [2, 12, 3]

// 14. Create a function that takes 3 numbers as arguments. Return true if any two of the numbers added together equal the third. Example:
// twoEqualOne(1, 2, 3) -> true 
// twoEqualOne(10, 7, 3) -> true 
// twoEqualOne(9, 5, 3) -> false

// 15. Create a function that takes 2 numbers as arguments. Return true if there is a digit that appears in both numbers. Example:
// sameDigit(5, 65) -> true 
// sameDigit(23, 82) -> true 
// sameDigit(85, 49) -> false

// function sameDigit(num1, num2){
// 	var array1 = num1.toString().split("")
// 	var array2 = num2.toString().split("")
// 	for(let i = 0; i<array1.length; i++){
// 		for(let j = 0; j<array2.length; j++){
// 			if(array1[i] == array2[j]){
// 				console.log(true)
// 			} else {
// 				console.log(false)
// 			}
// 		}
// 	}

// }

// sameDigit(492, 872)

// 16. Write a function that takes an array of numbers and creates a new array with only the even numbers from the first array. Example:
// only_even([1,2,3,4,5,6]) -> [2, 4, 6] // only_even([22,38,41,5,3610]) -> [22, 38, 3610] // only_even([21,15,6,87,97]) -> [6]

 // 17. given two arrays that contain integers with no duplicates, create a function that determines whether they contain the exact same elements. Example: # same_arr([1, 2, 3], [3, 2, 1]) --> true # same_arr([1, 2, 3], [2, 3, 4]) --> false

// 18. Given an array of integers, return true if the array contains either 3 even or 3 odd values all next to each other.
//  
//  same_three([2, 1, 3, 5]) -> true 
 // same_three([2, 1, 2, 5]) -> false 
 // same_three([2, 4, 2, 5]) -> true

// 19. Find Beatles. You have an array of objects. Write a function that takes one argument - the array named list - 
// and filters all the persons from this list born in Liverpool. Return an object that contains a property of names and 
// value of an array of the names of all persons from Liverpool.

// var list = [
// 	person1 =  {
// 		name: "john",
// 		age: 23,
// 		location: 'Liverpool'
// 	},
// 	person2 =  {
// 		name: "james",
// 		age: 73,
// 		location: 'Chicago'
// 	},
// 	person3 = {
// 		name: "george",
// 		age: 43,
// 		location: 'Liverpool'
// 	},
// 	person4 = {name: "paul",
// 		age: 54,
// 		location: 'Liverpool'
// 	},
// 	person5 = {
// 		name: "ringo",
// 		age: 43,
// 		location: 'Liverpool'
// 	},
// 	person6 = {
// 		name: "mick",
// 		age: 43,
// 		location: 'London'
// 	},
// 	person7 = {
// 		name: "keith",
// 		age: 93,
// 		location: 'London'
// 	},
// 	person8 = {
// 		name: "jim",
// 		age: 53,
// 		location: 'Los Angeles'
// 	}

// ]

// obj = {}

// function listSelection(arg){
// 	var array = [];
// 	for(let i = 0;i<arg.length;i++){
// 		if(list[i].location == "Liverpool"){
// 			array.push(list[i].name)
// 		}

// 	}
// return obj.names = array;
// }


// 20. Create a function that takes an array of numbers as an argument
//  and returns the sum of all of the Even and all of the Odd numbers


// function sumOddandPair(array){
// 		var oddArray = [];
// 		var pairArray = [];
// 		var oddSum = 0;
// 		var pairSum = 0;
// 	for(let i=0;i<array.length;i++){
// 		if(array[i] % 2 === 0 ){
// 			pairArray.push(array[i])
// 		}else {
// 			oddArray.push(array[i])
// 		}
// 	}
// 	for(let i=0;i<pairArray.length;i++){
// 		pairSum += pairArray[i]
// 	}
// 	for(let i=0;i<oddArray.length;i++){
// 		oddSum += oddArray[i]
// 	}

// 	return "The sum of all pair numbers is: " + pairSum + " The sum of all odd numbers is: " + oddSum

// }

// function sumOddandPair(array){
// 	var oddArray = [];
// 	var pairArray = [];
// for(let i=0;i<array.length;i++){
// 		if(array[i] % 2 === 0 ){
// 			pairArray.push(array[i])	
// 		}else {
// 			oddArray.push(array[i])	
// 		}
// 	}
// 	sumEven(pairArray)
// 	sumOdd(oddArray)
// }

// function sumEven(array){
// 	var even=0;
// 	for(let i=0;i<array.length;i++){
// 		even += array[i]
// 	}
// 	console.log(even)
// }


// function sumOdd(array){
// 	var odd = 0;
// 	for(let i=0;i<array.length;i++){
// 		odd += array[i]
// 	}
// 	console.log(odd)
// }

// 21. Write a function that in each second with math.random gives you a number between
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

//21. Compare the two objects whether there is an unique property in the first one compared to the second one.

// var obj = {
// 	fname: "John",
// 	lname: 'Smith',
// 	country: 'USA',
// 	gender: "male",
// 	age: 32,
// 	address: 'whatever street 1122',
// 	state: 'Iowa',
// 	car: true,
// 	animals: true,
// 	insurance: true,
// 	martial_status: true
// }

// var obj2 = {
// 	fname: "John",
// 	lname: 'Smith',
// 	country: 'Spain',
// 	age: 34,
// 	address: 'Reina amalia 43',
// 	smoker: true,
// 	state: 'Catalunya',
// 	car: false,
// 	insurance: false,
// 	martial_status: false
// }

// function whatever(ob1, ob2){
// 	var ob1Keys = Object.keys(ob1);
// 	var ob2Keys = Object.keys(ob2);
	
// 	var keys = [];

// 	for(let i = 0;i<ob1Keys.length; i++){
// 		var status = false
// 		for(let j = 0;j<ob2Keys.length; j++){
// 			if(ob1Keys[i] == ob2Keys[j]){
// 				status = true;
// 			}
// 		}
// 		if(status == false){
// 			keys.push(ob1Keys[i])

// 		}
// 	}
// 	return keys 
// }


//22. write a function that takes a sentence as an argument and aways returns the penultimate word in it with 
// .jpg attached to it.
// Example:
// "This is another day of my lovely life" - > lovely.jpg

// function penultime(phrase){
// 	var a = phrase.split(" ")
// console.log(a[a.length-2] + ".jpg")
// }

// 23. write a method that gives you random names from an array in JS 

// function randomize(array){
// var a = Math.floor(Math.random() * array.length)

// console.log(array)
// }


//24. Using indexOf and splice() create a function that takes an array and a name as an argument and removes a given item from the array if it is there;
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

// 25. Write a method that takes two arguments = a long string and a word and substitute all instances of a given word with the word you are passing. EX:
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


// 26. Write a method that takes a string as an argument and returns the length of the string
// substituted by alternating #-#-#-.
// For example, var whatever = #-#-#-#-;

// function dashing(string){
// 	var result = new String();
// 	for(let i =0;i<string.length;i++){
// 		if(i%2 == 0){
// 			result += "#";
// 		}else {
// 			result += "-"
// 		}
// 	}
// 	return result;
// }

// 27. Write a method that arranges a given array with unordered numbers in consequent order.
// DO not use sort();

// function sorting(array){
// 	var temp;
// for(let i =0;i<array.length;i++){
// 	for(let j = 0;j<array.length;j++){
// 		if(array[j]>array[j+1]){
// 			temp = array[j];
// 			array[j] = array[j+1];
// 			array[j+1] = temp;
// 		}
// 	}
// }return array;

// }

// 28. write a method that reverses a given string; do not use reverse()!

// function rever(string){
// 	var result = new String();
// 	for(let i = string.length - 1; i >= 0 ;i--){
// 		result += string[i]
// 	}
// 	return result;
// }

// 29. Write a function that takes a string as an argument and returns all the vowels
// from this string into another string
// 'whatever happens in time' -> 'aeeaeiie'
	//  - write another method that counts all the instances of
	// the vowels a: 2, e: 4, i: 2 etc.


// 30. Write a recursive method that gives you all  numbers from 1 to 100

// function positive(num){
// 	if(num == 101){
// 		return num;
// 	}else {
// 		console.log(num)
// 	}
// 	positive(num + 1)
// }

// 31. write a function that takes a string as an argument and returns it as dashes:
// e.g:
// var word = > "_ _ _ _"
// var dashed = word.replace(/[a-z]/gi, " __ ")


// 32. write a function that takes an array of numbers and checks 
// for all the numbers that are divisible by 7 AND even.
//  If the array does not contain such numbers return 
// "no value found"


// var numberRange = [5,6,7,8,9,19,28,11,23,24,21,36,35,14] 

// function checknumber(numbers)
// {
// 	var range = []

// 	for(i=0;i<numbers.length;i++)
// 	{
// 		if (numbers[i]%2==0 && numbers[i]%7==0)
// 			{
				
// 				range.push(numbers[i])
// 			}
// 	}
	
// 	if(range != 0)
// 	{
// 		console.log("The numbers that are even and divisible by 7 are " + range)
// 	}
// 	else
// 	{
// 		console.log("No Return Value Found")
// 	}
// }

// checknumber(numberRange);


// 33. Create a method that takes an array of names and returns all the Vowels capitalized.
// ex -> ['john', 'george', 'paul', 'ringo'] ->["jOhn", "gEOrgE", "pAUl", "rIngO"]

// var array  = ['john', 'george', 'paul', 'ringo']
// function capit(array){
// 	var result = ''
// 	var joining = array.join()
// 	for(let i = 0;i<joining.length;i++){
// 		if(joining[i] == "a" || joining[i] == "e" || joining[i] == "i" || joining[i] == "o"){
// 			result += joining[i].toUpperCase()
// 		}else {
// 			result += joining[i]
// 		}
// 	} return result.split(",")
// }

// capit(array)

// 34. Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then 
// your program should return the string sredoC dna dlroW olleH. 

// function FirstReverse(str) {
// 	var temp = str.split("").reverse().join("")
// 	console.log(temp)
	
// }

// 35. Using the JavaScript language, have the function LongestWord(sen) take the sen
//  parameter being passed and return the largest word in the string. 
//  If there are two or more words that are the same length,
//   return the first word from the string with that length. 
//   Ignore punctuation and assume sen will not be empty. 

// function longestWord(sen){
// 	var splitting = sen.split(" ")
// 	var max = splitting[0]
// 	for(let i = 0;i<splitting.length;i++){
// 		if(splitting[i].length > max.length){
// 			max = splitting[i]
// 		}
			
// 	}
// 	console.log(max)
// }

// 36. Write a function that takes the nested array as an argument and converts it into an object literal.
// Second array contains the keys and first array contains the values

// array = [["oggi", "Danailov", 23, "Serbia"], ["first name", "last name", "age", "country"]]
// function convertArray(array){
// 		var obj = {}
// 	for(let i = 0;i<array[0].length;i++){
// 		obj[array[1][i]] = array[0][i]
// 	}
// 	return obj;	
// }

               





// 3. Difficult:

// 1. Fibonacci number is the sum of the previous two sequence numbers.
 // Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … 
 // Notice the sequence pattern is the sum of the previous two numbers?
// This is recursive:

// function fibonacci(n) {
//    if (n < 2){
//      return 1;
//    }else{
//      return fibonacci(n-2) + fibonacci(n-1);
//    }
// };



// without recursive

// Anthony
// function fib(x){
// var a=0
// var b= 1

// for(let i=0; i<x-2; i++){
// var c = a + b
// a=b
// b=c

//  }
//  return c
// }

// Bridgit

// Write a fibonacci sequence function without using recursion

// fibonacci is number plus previous number: 0 1 1 2 3 5 8 13 21...

// function fibonacci (range) {
//   var many = Math.floor(range/2);
//   var place = 0;
//   var set = 1;
//   for (i=0;i<many;i++) {
//     console.log(place);
//     set+= place;
//     console.log(set);
//     place += set;
//   }
//   if (range%2 != 0) {
//     console.log(place)
//   }
// }

// fibonacci(9);



// function fibo(n){
// 	if(n<= 1){
// 		return n;
// 	}
// var x = 1;
// var y = 1;
// var temp = 0;
// for(let i = 2; i<n; i++){
// 	temp = x;
// 	x = x + y;
// 	y = temp;
// }
// 	return x;
// }


// 2. "Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning All characters between the first character and the @ (if any) must be letters, numbers, or underscores There must be an @ character (after the points listed just now) After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen The email must end with at least one set of a dot followed by one or more word characters. The input must NOT be case-sensitive The function should return true or false.


// function emailcheck(email) {
// 	// check if there is a @ character in the email 
// 	if (email.indexOf('@') > -1)
// 	{
// 		console.log("@ found inside your_string");
// 		// test if the first part of email have either a non-number or number characters
// 		if (email.split("@")[0].match(/\D/g) != null)
// 		{
// 			console.log("your first part of email have either a non-number or number, ITS GOOD")
// 		}
// 		else 
// 		{
// 			console.log("your first part of email is NOT GOOD")
// 		}
// 		if (email.split("@")[1].indexOf('.') > -1) // check if there is a '.' in the second part
// 		{
// 			console.log("you have a . in your second part")
// 			if (email.split("@")[1].match(/\D/g) != null ) 
// 			{
// 				console.log("your second part of email have either a non-number or number, ITS GOOD")
// 			}
// 			else 
// 			{
// 				console.log("your second part of email is NOT GOOD")
// 			}
			
// 		}
// 		else
// 		{
// 			console.log("your second part of email doesnt have a dot")
// 		}
// 	}

// 	else
// 	{
// 		console.log("IT IS NOT EVEN AN EMAIL ")
// 	}	
// }


// 3. given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// examples:
 // [1, 2, 3], [3, 2, 1] --> true
 // [1, 2, 3], [2, 3, 4] --> false


 // function compare(a,b){
 // 	var t = a.sort()
 // 	var u = b.sort()
 // if(t.join('') === u.join('')){
 //   return true
 // }else {
 //   return false
 // }
 // }
 // compare([2,3,1], [3,2,1])

//  4. Create a FizzBuzz recursively

// function fizzBuzz(n) {
//   if (n === 100) {
//     return 100
//   } else {
//     if (n % 3 === 0 && n % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (n % 5 === 0) {
//       console.log('Buzz');
//     } else if (n % 3 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(''+ n);
//     }
//     return fizzBuzz(n + 1)
//   }
// };

// 5. write a method that takes the unordered array and returns a object literal;
// var array = [
// 34,5,25,'WI','SC','TN',23,'NY',32,19,'OK',2,'DC',27,'NC','MA',24,'CA','NH','NE','KS','MI',6,17,43,'MN',47,'WY',29,'HI','NM','MD',36,'IA','AZ','IN',12,14,10,'NV','GA',40,'CT','OR',44,'LA',41,'AR',1,30,'ID','NJ',33,22,11,'AK',20,18,21,50,'SD','MS','FL',48,'TX',7,'MT',45,42,'CO','AL',38,'VT','ME',46,35,51,31,26,4,39,'UT',9,'DE',37,'OH',16,'PA','ND','RI',3,'MO',13,8,49,15,'WV',"IL","KY","VA",28,"WA"]
// obj ={
//     1: 'AK',
//     2: 'Al',
//     3: "Ar",
//     4: "Az"
// } 

// function separation(x){
//     var strings = [];
//     var numbers = [];
//     for(let i =0;i<x.length;i++){
//         if(typeof(x[i]) == 'string'){
//             strings.push(x[i])
//         }else {
//             numbers.push(x[i])
//         }
//     }
//     sorting(strings, numbers)
// }

// function sorting(x,y){
//     x.sort()
//     y.sort(function(a,b){
//         return a-b;
//     })
//     objecting(x, y)
// }

// function objecting(strings, numbers){
//     var obj = {};
//     for(let i = 0;i<strings.length;i++){
//         obj[numbers[i]] = strings[i]
//     }
//     console.log(obj);
// }


//  6. Return true if the group of N numbers at the start and end of the array are the same. For example, with [5, 6, 45, 99, 13, 5, 6], the ends are the same for n=0 and n=2, and false for n=1 and n=3.
//   same_ends([5, 6, 45, 99, 13, 5, 6], 1) → false 
 // same_ends([5, 6, 45, 99, 13, 5, 6], 2) → true 
  // same_ends([5, 6, 45, 99, 13, 5, 6], 3) → false



// 7. Write a method that gives you the corresponding Factorial:

// function factorial(4) - 24;
// function factorial(5) - 120;

// recursive:
// function factorial(num){
// 	if(num == 0){
// 		return 1;
// 	}else {
// 		return (num * factorial(num-1));
// 	}
// }

// non-recursive:

// function factorial(x){
// 	var result = 1;
// 	for(let i = x; i> 0; i--){
// 		result *= i;
// 	}
// 	return result;	
// }

// 8. Binary sorting - look into a sorted array whether there is a given number and return
//  the corresponding index; IF IT IS not there return -1


// function search(array, target){
// 	var left = 0;
// 	var right = array.length-1
// 	while(left <= right){
// 		var mid = left +  Math.floor((right-left)/2)
// 		if(array[mid] == target){
// 			return mid
// 		}
// 		if(array[mid] < target){
// 			left = mid + 1;
// 		}else {
// 			right = mid - 1
// 		}
// 	}
// 		return -1
// }

// 9. Write a method that removes all the repeatable items in an array

// function whatever(ar){

// var obj = {};

// for(let i =0;i<ar.length;i++){
// 	obj[ar[i]] = 0;
// }
// var result = (Object.keys(obj))

// console.log(result);
// }

// var a = [3,4,5,6,7,6,8,3,6,4,67,23,54,56,54,56];

// whatever(a)


// 10. write a method that returns the nth number of fibonacci sequence.
// Do not use recursive method

// function fibo(num){
// 	var a = 0;
// 	var b = 1;
// 	var temp;
// 	for(let i = 0; i<num; i++){
// 		temp = a + b;
// 		a = b;
// 		b = temp;
// 	}
// 	return temp;
// }


// 11. Replace globally all the instances of letter 's' in the array with number 7:

// var ssssh = ["seven", "siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']
// Emmanuel's method
// var ssssh = ["seven", "Siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']
// var combine = ssssh.join()

// var rep = combine.replace(/s/, 7)
// console.log(rep)
// gi - g stands for globallyi - stands for insensitive

// Aaron's way:

// var ssssh = ["seven", "Siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']

// function replaceVowels(arg1, arg2){
// 	var string1 = ssssh.toString()
// 	var string2 = string1.split("")
// for(let i = 0;i<string2.length;i++){
// 	if(string2[i] == arg1){
// 		string2.splice(i, 1, arg2)
// 	}
// }
// 	console.log(string2.join(""))
// }

// 12. Write a function that takes a string as an argument and inserts each letter as a 
//  separate item in an array. The new array should contain ONLY the consonants (not the vowels)

// e.g.

// 'string' => ['s', 't', 'r', 'n', 'g' ]

// Steven's version
// function noV(string){
// var vowels = ['a', 'e', 'i', 'o', 'u']
// 	var letters = string.split("")
// 	for(let i =0;i<letters.length;i++){
// 		if(vowels.includes(letters[i])){
// 			letters.splice(i, 1)
// 		}
// 	}	
// 	console.log(letters)
// }

// Oggi's solution

// function noV(string){
// 	var letters = string.split("")
// 	var array = [];
// 	for(let i=0;i<letters.length;i++){
// 		if(letters[i] !== 'i' && letters[i] !== "a" && letters[i] !== "o"){
// 			array.push(letters[i])
// 		}
// 	}
// 	console.log(array)
// }


// 13. Using the JavaScript language, have the function SimpleSymbols(str) take the 
// str parameter being passed and determine if it is an acceptable sequence
//  by either returning the string true or false. The str parameter will
//   be composed of + and = symbols with several letters between them
//    (ie. ++d+===+c++==a) and for the string to be true each letter must
//     be surrounded by a + symbol. So the string to the left would be false.
//      The string will not be empty and will have at least one letter. 
// Sample Test Cases:

// Input:"+d+=3=+s+"
// Output:"true"

// Input:"f++d+"
// Output:"false"

// function simpleSymbols(string){
//  stringArray = string.split("")
//  alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
// "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// check = true
//  for(let i=0;i<stringArray.length;i++){
//    for(let j=0;j<alpha.length;j++){
//      if(stringArray[i].indexOf(alpha[j]) && stringArray[i-1] == "+" && stringArray[i+1] == "+"){
//        check = true
//      }else if(stringArray[i] !== alpha[j]){

//      }else{
//        check = false
//      }
//    }
//  }console.log(check)
// }

// Bridget with Regex

// function SimpleSymbols(str) {
// 	var letters = (/^[A-Za-z]+$/);
// 	var array = str.split("");
// 	var check = true;
// 	for (i=0;i<array.length;i++) {
// 		if (array[i].match(letters)) {
// 			// NEXT LINE: first version from when i  misread the challenge, just checks if the letter is surrounded by any symbol
// 			// if (i==0 || i == array.length-1 || array[i-1].match(letters) || array[i+1].match(letters)) {
// 			if (i==0 || i == array.length-1 || array[i-1] != "+" || array[i+1] != "+") {
// 				check = false;
// 			}
// 		}
// 	}
// 	console.log(check);
// }

// SimpleSymbols("+d+=3=+s+"); // should return true
// SimpleSymbols("f++d+"); // should return false
// SimpleSymbols("+f++d"); // should return false
// SimpleSymbols("++ik=+"); // should return false
// SimpleSymbols("+h=+"); // should return false


// 14. write a method that finds all the numbers in an array that are divisible by three and then sort them in descending order (do not use sort()!!!!!)

// ex. [1,2,3,4,5,6,7,8,45,65,34,23,9] => [45, 9, 6, 3]

// function order(a){
// var array = []
// for(let x=0;x<a.length;x++){
//   if(a[x] % 3 == 0){
//     array.push(a[x])
//   }
// }

// for(let i=0;i<array.length;i++){
//   for(let j=0;j<array.length;j++){
//     if(array[j] < array[j+1]){
//       var temp = array[j]
//       array[j] = array[j+1]
//       array[j+1] = temp
//     }
//   }
// }console.log(array)
// }

// 15. Write a method that takes a string and depending on the size of this string it returns this string with x for each vowel and o for each consonant

// ex. 'string' => oooxoo
// string1 = "alphabet"
// function vowels(str){
//   var v = ["a","e","i","o","u"];
//   var newArray = str.split("");
//   for(let i = 0;i<newArray.length;i++){
//     if(v.includes(newArray[i])){
//       newArray[i] = "o"
//     }
//     else{
//       newArray[i] = "x"
//     }
//   }
//   console.log(newArray.join(""))
// }



// 16. write a method that takes an array of strings and returns all the strings in alphabetical order. 

// from Lori
// ex. => "this is so interesting" => "eeghiiiinnorssssttt"

// def sortString(string)
//   # string.split('').sort.join('')
//   alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   stringArr = string.downcase.split('')
//   result = []
//   alphabet.each do |letter|
//     if stringArr.include?(letter)
//       frequency = stringArr.count(letter)
//       frequency.times{result << letter}
//     end
//   end
//   print result.join('')
// end

// puts sortString("this is so interesting")

// 17. write a function that takes two numbers and returns the number that is closest to zero:

// function closestToZero(x, y) {
//     function abs(x) {
//         if(x > 0) {
//             return x;
//         } else {
//             return -x;
//         }
//     }

//     if(abs(x) < abs(y)) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log("2: " + closestToZero(2, 3));
// console.log("-5: " + closestToZero(-5, 6));
// console.log("-1: " + closestToZero(-1, -1));



// 18. google what binary sorting is and try to resolve it in this way
// array = [1,2,3,4,5,6,7,8,9]

// searchLinear(array, 4)

//  function searchBinary(array, target){
//  	var left = 0;
//  	var right = array.length-1;
//  	while(left <=right){
//  		var mid = left + Math.floor((right-left)/2)
//  		if(array[mid] == target){
//  			return mid
//  		}
//  		if(array[mid] < target){
//  			left = mid + 1
//  		}else{
//  			right = mid -1
//  		}

//  	}

//  	return -1
//  }


// 19. write a function that takes a sentence as an argument and checks if the word 'whatever' is there;
 // If it is not there it returns -1; if it is there it subsitutes the word 'whatever' with dashes - like "_________" and
 //  returns the original sentence with ______ instead of whatever;

// function whatever(string){
	
// 	var a = string.split(" ")
// 	var result = "";
// for(let i =0;i<a.length;i++){
// 	if(a[i].includes("whatever")){
// 	  dashes(a[i])
// 	}	
// } if(a.indexOf('whatever') == -1){
// 		return -1;
// 	}

// }

// function dashes(x){
// 	console.log(x)
// 	var result = ""
// 	for(let i = 0;i<x.length;i++){
// 		result += " _ "
// 	}console.log(result);
// }

// jordan

// function replaceString(String, Word) {
// 	//Check if String contains the given Word
// 	const result = String.includes(Word)
	
// 	//If it contains the word replace the word with dashes

// 	if(result) {
// 		//Replace the word in the string with a number of dashes being the words length
// 		const len = Word.length;
// 		let stringArr = String.split(' ')
// 		const index = stringArr.indexOf(Word)
// 		let dashes = ''

// 		//Give dashes variable words length many _
// 		for(let i = 0; i < len; i++) {
// 			dashes += '_'
// 		}

// 		//Remove the word and insert dashes
// 		stringArr.splice(index, 1, dashes)
		
// 		//Turn the array back into a string
// 		let string = stringArr.join(' ')
// 		console.log(string)
// 	} else {
// 		console.log('false')
// 		return -1;
// 	}
// }

// 20. write a function that takes an array of subarrays with numbers and, using random(), returns a random subarray of this array. Then using filter() remove all even numbers of the subarray and using reduce() return the sum of these numbers.
// EX: var a = [[2,3,5],[5,7,6],[5,7,8],[7,9,8]] -> a[2] selected randomly and then return the sum of the odd numbers in this array

// function randomizer(){
// 	var b = a[ Math.floor(Math.random()*4)]
// 	console.log(b)
// 	b.filter(function(el){
// 		return el % 2 !== 0;
// 	}).reduce(function(a,b){
// 		console.log(a + b);
// 	})
// }



// 21. write a function that lists all the prime numbers from 1 to 100

// function prime(){
// 	var array = []
// 	for(let i = 1;i<100;i++){
// 		if(i%2 == 0){
// 			if(i == 2){
// 				array.push(i)
// 			}
// 		}else if(i%3 == 0){
// 			if(i == 3){
// 				array.push(i)				
// 			}	
// 		}else if(i% 5 == 0){
// 			if(i == 5){
// 				array.push(i)
// 			}
// 		}else if(i%7 == 0){
// 			if(i ==7){
// 				array.push(i)
// 			}
// 		}else {
// 			array.push(i)
// 		}

// 	}if(array[0] ==1){
// 		array.shift()
// 	}
// 	return array	
// }

// function allPrimes(num){
//   primes = [];
//   for(let i=1; i<=num; i++){
//     factors = [];
//     for(let j=1; j<=i; j++){
//       if(i%j===0){
//         factors.push(j)
//       }
//     }
//     if(factors.length===2){
//       console.log(factors);
//       primes.push(i);
//     }
//   }
//   return primes.join(", ")
// }

// console.log(allPrimes(100))



 //22. create method that takes a string and returns the corresponding next letter for each letter in this string
// abc => bcd
// capitalze all vowels
// you would use foreach here becuase forEach will return a string; you can apply toUpperCase() right away
	
// 	var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
// "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// function nextLetter(string){
// 	var word = "";
// 	var temp = string.split("");
// 	for(let i =0;i<temp.length;i++){
// 		for(let j = 0;j<a.length;j++){
// 			if(temp[i] == a[j]){
// 				if(temp[i] == 'z'){
// 					word += "a"
// 				}else {
// 					word += a[j + 1]
// 				}
// 			}
// 		}
// 	}
// 	capitalization(word)
// }

// function capitalization(arg){
// 	var output ="";
// 	var vowels = "aeiou"
// 	var temp = arg.split('')
	// temp.forEach(function(letter){
	// 	if(vowels.indexOf(letter) !== -1){
	// 		output += letter.toUpperCase()
	// 	}else {
	// 		output += letter
	// 	}
	// })

// 	for(let i = 0;i<temp.length;i++){
// 		if(vowels.indexOf(temp[i]) !== -1){
// 			output += temp[i].toUpperCase()
// 		}else {
// 			output += temp[i]
// 		}
// 	}
// 	console.log(output)
// }


// 23. write a function that takes a word and a letter as an argument; it converts this word into an array and creates an additional array with dashes representing each letter from the first array (hint - they will always be the same length); then your function should check if the letter is in your word; if it is you should subistute the corresponding dash from the dash array with the corresponding letter.
// var dashes = [];
// function whatever(word, letter){
	
// 	for(let i =0; i<word.length;i++){
// 		dashes.push(" _ ");	
// 	if(word[i] == letter){
// 		dashes[i] = letter;
// 	}
// 	}return dashes;
// }


// 24. Write a method that takes a random item of an array but when you call it again
// it makes sure that you do not call the last item of the array
// var array = ['a', 'b', 'c', 'd']
// var currentWord = "a";
// function change(){
// 	console.log('current status of CurrentWord ' + currentWord)
// 	var temp = array[Math.floor(Math.random()* array.length)]
// 	console.log("This is first temp " + temp)
// 	if(temp == currentWord){
// 		change();
// 	}else {
// 		currentWord = temp;
// 	}
// 	console.log(currentWord);
// }


