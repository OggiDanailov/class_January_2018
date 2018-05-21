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
	
	var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function nextLetter(string){
	var word = "";
	var temp = string.split("");
	for(let i =0;i<temp.length;i++){
		for(let j = 0;j<a.length;j++){
			if(temp[i] == a[j]){
				if(temp[i] == 'z'){
					word += "a"
				}else {
					word += a[j + 1]
				}
			}
		}
	}
	capitalization(word)
}

function capitalization(arg){
	var output ="";
	var vowels = "aeiou"
	var temp = arg.split('')
	// temp.forEach(function(letter){
	// 	if(vowels.indexOf(letter) !== -1){
	// 		output += letter.toUpperCase()
	// 	}else {
	// 		output += letter
	// 	}
	// })

	for(let i = 0;i<temp.length;i++){
		if(vowels.indexOf(temp[i]) !== -1){
			output += temp[i].toUpperCase()
		}else {
			output += temp[i]
		}
	}
	console.log(output)
}



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

function FirstReverse(str) {
	var temp = str.split("").reverse().join("")
	console.log(temp)
	
}





