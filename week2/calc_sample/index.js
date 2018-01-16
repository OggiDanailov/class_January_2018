var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var result = document.getElementById('result')
var adding = document.getElementById('add')
var multiplying = document.getElementById('multiply')
var dividing = document.getElementById('divide')
var subtracting = document.getElementById('subtract')
var moduling = document.getElementById('moduling')

adding.addEventListener('click', add)
multiplying.addEventListener('click', multiply)
dividing.addEventListener('click', divide)
subtracting.addEventListener('click', subtract)
moduling.addEventListener('click', modulo)


function add(){
	result.innerHTML = parseInt(num1.value) + parseInt(num2.value)
		if(result.innerHTML == 0) {
			result.style.backgroundColor = 'blue'
		}else if(result.innerHTML % 2 === 0){
			result.style.backgroundColor = 'green'
		}

		else{
			result.style.backgroundColor = 'yellow'
		}
}

function subtract(){
	result.innerHTML = parseInt(num1.value) - parseInt(num2.value)
}

function divide(){
	result.innerHTML = parseInt(num1.value) / parseInt(num2.value)
}

function multiply(){
	result.innerHTML = parseInt(num1.value) * parseInt(num2.value)
}

function modulo(){
	result.innerHTML = parseInt(num1.value) % parseInt(num2.value) 
}



var word = document.getElementById('word')
var checking = document.getElementById('checking')
var palindrome = document.getElementById('palindrome')


checking.addEventListener('click', checkPalindrome)


function checkPalindrome(){
	var result = word.value.split('').reverse().join('')
	if(result === word.value){
		palindrome.innerHTML = word.value + ' is a palindrome'
	} else {
		palindrome.innerHTML = word.value + ' is NOT a palindrome'
	}


}
































