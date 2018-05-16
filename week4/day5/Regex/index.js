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
		













