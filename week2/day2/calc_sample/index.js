// var body = document.getElementById('body')
// var win = document.getElementById('window')

// body.addEventListener('keypress', function(e){
// var res = String.fromCharCode(e.charCode)
// console.log(res)
// win.innerHTML = res
// })

// function password_match () {
// 	var password = document.getElementById('password').value
// 	if(password == "12345678") {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// function username_match() {
// 	var username = document.getElementById('username').value;
// 	var characters = username.split("");

// 	var presence = characters.map(function(element) {
// 		return Number.isInteger(parseInt(element))
// 	});

// 	if (presence.indexOf(true) !== -1) {
		
// 		return true
// 	} else {
// 		alert ("incorect")
// 	}
// }
// function validateForm () {
// 	if(password_match() ==true && username_match()==true) {
// 		 alert('correct')
		 
// 	} else {
// 		alert ("incorect")
// 	}
// }
// var what = document.getElementById("what")
// what.addEventListener("click",function(){
// 	validateForm()
// })




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



// var word = document.getElementById('word')
// var checking = document.getElementById('checking')
// var palindrome = document.getElementById('palindrome')


// checking.addEventListener('click', checkPalindrome)


// function checkPalindrome(){
// 	var result = word.value.split('').reverse().join('')
// 	if(result === word.value){
// 		palindrome.innerHTML = word.value + ' is a palindrome'
// 	} else {
// 		palindrome.innerHTML = word.value + ' is NOT a palindrome'
// 	}


// }
































