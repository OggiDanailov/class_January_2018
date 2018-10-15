// var a = new RegExp();

// Regex:

// /([A-Z])\w+/g

// https://regex101.com/
// match, replace, search, and split methods of String.
// sequence of characters that forms a search pattern
// /\d/ - number - it will return the first number
// \D - matches not a digit
// (/\d/g) - numbers - it will return all the numbers
// (/\d+/g)  - will add numbers that are together 
// ^ - certian position in the beginning of the string
// $ - certian position in the end of the sting
// [a-z]{1,3}$ - it will match only 3 letters range
// [a-z]{4} - will match exact number
// \s - sapce
// \n new line
// \. - will search for dot
// . - any character
// [] - character set - includes more than one character
// ^[b]at - will not match bat
// ? - matches either one or nothing Mr\.? will match MR with or without .


// var submit = document.getElementById('submit')

// submit.addEventListener('click', regexCheck)

// function regexCheck(){
// 	var result ='';
// 	var input = document.getElementById('input').value
// 	result =  input.match(/e+/g)
// 	if(result){
// 		alert(result)	
// 	}else {
// 		alert('no match')
// 	}
	
// }


// function chess(){
// var element = "";
// 	for(let i = 0;i < 8; i++){
// 		for(let j=0;j<8;j++){
// 			if(i%2 == 0){	
// 				if(j%2 == 0){
// 					element += "#" 
// 				}else {
// 					element += "-"
// 				}	
// 			}else {
// 				if(j % 2 == 0){
// 					element += "-" 
// 				}else {
// 					element += '#'
// 				}
// 			}
// 		}
// 		element += '\n'
// 	}
// 		console.log(element)	
// }


// var wrapper = document.createElement('div')
// wrapper.style.border = "2px solid black"
// wrapper.style.width = '800px'
// wrapper.style.margin = '0 auto'
// document.body.appendChild(wrapper)

// 	for(let i = 0;i < 8; i++){
// 		for(let j=0;j<8;j++){
// 			var block = document.createElement('div')
// 				block.style.width = '100px'
// 				block.style.height='100px'
// 				block.style.display = 'inline-block'
// 				wrapper.appendChild(block)
// 			if(i%2 == 0){
// 				if(j%2 == 0){	
// 					block.style.backgroundColor = 'black'
					
// 				}else {
					
// 					block.style.backgroundColor = 'grey'
// 				}	
// 			}else {
// 				if(j % 2 == 0){
					
// 					block.style.backgroundColor = 'grey'
// 				}else {
					
// 					block.style.backgroundColor = 'black'
// 				}
// 			}
// 		}
	

// 	}
// create method that takes a string and returns the corresponding next letter for each letter in thsi string
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



// 1. Write a method that lists all the numbers from 1 to 100 and adds together all the odd numbers

// 2. Write a function that takes the nested array as an argument and converts it into an object literal.
// Second array contains the keys and first array contains the values

// array = [["oggi", "Danailov", 23, "Serbia"], ["first name", "last name", "age", "country"]]
// function convertArray(array){
// 		var obj = {}
// 	for(let i = 0;i<array[0].length;i++){
// 		obj[array[1][i]] = array[0][i]
// 	}
// 	return obj;	
// }

// 3. Write a function that finds the smallest number in an array; the array should work with 
// negative numbers as well

// 4. write a function that lists all the prime numbers from 1 to 100

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

// 1. Using the JavaScript language, have the function LongestWord(sen) take the sen
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

// 3. Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then 
// your program should return the string sredoC dna dlroW olleH. 

// function FirstReverse(str) {
// 	var temp = str.split("").reverse().join("")
// 	console.log(temp)
	
// }

// Regex - October 15, 2018

// var a = new Regex(123);
// var b = /123/

//  Some characters, such as
// question marks and plus signs, have special meanings in regular expressions and
// must be preceded by a backslash if they are meant to represent the character
// itself.
// let eighteenPlus = /eighteen\+/;

// Regex methods:
// test()
// exec()

// String:
// match(); replace(); search(); split()

/s/.test('string');
/str/.test('string');

console.log(/[0-9]/.test("when I arrived in the US in 2003"))
// here we have a range of numbers.  In a regular expression, putting a set
// of characters between square brackets makes that part of the expression match
// any of the characters between the brackets.
// Within square brackets, a hyphen (-) between two characters can be used
// to indicate a range of characters, where the ordering is determined by the
// character’s Unicode number. Characters 0 to 9 sit right next to each other in
// this ordering (codes 48 to 57), so [0-9] covers all of them and matches any
// digit.
\d - any digit;
\w - any word character;
\s - any white space character (space, tab, newline)
\D - any character that it is not a digit;
\W - any character that it is not a word;
\S - any character that it is not a white space;
. - any character except for newline;


var date = "01-feb-2018"
(/\d\d-\w\w\w-\d\d\d\d/).test(date)

^ - To invert a set of characters—that is, to express that you want to match any
character except the ones in the set—you can write a caret (^) character after
the opening bracket.


// var a = /[^1-3]/

// a.test(456)
// true
// (there is no 1,2,3 and therefore the expression will be true);

// a.test(123)
// will give you false

\d+ - When you put a plus sign (+) after something in a regular expression, it
indicates that the element may be repeated more than once. Thus, /\d+/
matches one or more digit characters.


{} - To indicate that a pattern should occur a precise number of times, use braces.
Putting {4} after an element, for example, requires it to occur exactly four
times
var a = "1234 Morning 123"
var t = /\d{4}\s\w{3,10}\s\d{3}/
t.test(a)
true

var b = "123 Morning 123"
b.test(a)
false

//i - insensitive

// Regular expressions also have an exec (execute) method that will
//  return null if no match was found and return an object with information 
//  about the match otherwise.

var a = /\d+/.exec('this is number 23')
a
["23", index: 15, input: "this is number 23", groups: undefined]

try:
var a = /is/.exec('this is number 23')
var a = /[is]/.exec('this is number 23')
var a = /[^is]/.exec('this is number 23')










