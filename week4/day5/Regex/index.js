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


function chess(){
	var count = 0;
var element = "";
	for(let i = 0;i < 8; i++){
		for(let j=0;j<8;j++){
			if(i%2 == 0){	
				if(j%2 == 0){
					element += "#" 
				}else {
					element += "-"
				}	
			}else {
				if(j % 2 == 0){
					element += "-" 
				}else {
					element += '#'
				}
			}
		}
		element += '\n'
	}
		console.log(element)	
}


// function chess(){
// var size = 8; //this is the variable setting

// var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
//   for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);
// }









