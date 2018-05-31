// 1. write a function that takes an array of numbers and checks 
// for all the numbers that are divisible by 7 AND even.
//  If the array does not contain such numbers return 
// "no value found"


var numberRange = [5,6,7,8,9,19,28,11,23,24,21,36,35,14] 

function checknumber(numbers)
{
	var range = []

	for(i=0;i<numbers.length;i++)
	{
		if (numbers[i]%2==0 && numbers[i]%7==0)
			{
				
				range.push(numbers[i])
			}
	}
	
	if(range != 0)
	{
		console.log("The numbers that are even and divisible by 7 are " + range)
	}
	else
	{
		console.log("No Return Value Found")
	}
}

checknumber(numberRange);
// 2. Create a method that takes an array of names and returns all the Vowels capitalized.
// ex -> ['john', 'george', 'paul', 'ringo'] ->["jOhn", "gEOrgE", "pAUl", "rIngO"]


// ruby
// @array = [‘hello’,‘bye’,‘morning’]

// def vowelCap(array)    
// result = []  
// array.each do |word|      
//  result << word.tr(‘aeiou’,‘AEIOU’)  
// end  
// print result end

// vowelCap(@array)

// js

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
// 	} return result
// }

// capit(array)


// 3.  Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) take the 
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

function simpleSymbols(string){
 stringArray = string.split("")
 alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
check = true
 for(let i=0;i<stringArray.length;i++){
   for(let j=0;j<alpha.length;j++){
     if(stringArray[i].indexOf(alpha[j]) && stringArray[i-1] == "+" && stringArray[i+1] == "+"){
       check = true
     }else if(stringArray[i] !== alpha[j]){

     }else{
       check = false
     }
   }
 }console.log(check)
}

// Bridget with Regex

function SimpleSymbols(str) {
	var letters = (/^[A-Za-z]+$/);
	var array = str.split("");
	var check = true;
	for (i=0;i<array.length;i++) {
		if (array[i].match(letters)) {
			// NEXT LINE: first version from when i  misread the challenge, just checks if the letter is surrounded by any symbol
			// if (i==0 || i == array.length-1 || array[i-1].match(letters) || array[i+1].match(letters)) {
			if (i==0 || i == array.length-1 || array[i-1] != "+" || array[i+1] != "+") {
				check = false;
			}
		}
	}
	console.log(check);
}

SimpleSymbols("+d+=3=+s+"); // should return true
SimpleSymbols("f++d+"); // should return false
SimpleSymbols("+f++d"); // should return false
SimpleSymbols("++ik=+"); // should return false
SimpleSymbols("+h=+"); // should return false






