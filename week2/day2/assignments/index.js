// Assignment:

// Complete and submit the following three exercises to go over JavaScript event binding:

//1.  Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

//2.  Create an HTML page with javascript that listens for a keypress inside an input element.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
//3. Example: If the user presses "J", the text inside the H1 should be "J".

//4.  Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.


var body = document.getElementById('body')
var win = document.getElementById('window')

body.addEventListener('keypress', function(e){
var res = String.fromCharCode(e.charCode)
console.log(res)
win.innerHTML = res
})

function password_match () {
	var password = document.getElementById('password').value
	if(password == "12345678") {
		return true
	} else {
		return false
	}
}
function username_match() {
	var username = document.getElementById('username').value;
	var characters = username.split("");

	var presence = characters.map(function(element) {
		return Number.isInteger(parseInt(element))
	});

	if (presence.indexOf(true) !== -1) {
		
		return true
	} else {
		alert ("incorect")
	}
}
function validateForm () {
	if(password_match() == true && username_match() == true) {
		 alert('correct')
		 
	} else {
		alert ("incorect")
	}
}
var what = document.getElementById("what")
what.addEventListener("click",function(){
	validateForm()
})




// var num1 = document.getElementById('num1')
// var num2 = document.getElementById('num2')
// var result = document.getElementById('result')
// var adding = document.getElementById('add')
// var multiplying = document.getElementById('multiply')
// var dividing = document.getElementById('divide')
// var subtracting = document.getElementById('subtract')
// var moduling = document.getElementById('moduling')

// adding.addEventListener('click', add)
// multiplying.addEventListener('click', multiply)
// dividing.addEventListener('click', divide)
// subtracting.addEventListener('click', subtract)
// moduling.addEventListener('click', modulo)


// function add(){
// 	result.innerHTML = parseInt(num1.value) + parseInt(num2.value)
// 		if(result.innerHTML === 0) {
// 			result.style.backgroundColor = 'blue'
// 		}else if(result.innerHTML % 2 === 0){
// 			result.style.backgroundColor = 'green'
// 		}

// 		else{
// 			result.style.backgroundColor = 'yellow'
// 		}
// }

// function subtract(){
// 	result.innerHTML = parseInt(num1.value) - parseInt(num2.value)
// }

// function divide(){
// 	result.innerHTML = parseInt(num1.value) / parseInt(num2.value)
// }

// function multiply(){
// 	result.innerHTML = parseInt(num1.value) * parseInt(num2.value)
// }

// function modulo(){
// 	result.innerHTML = parseInt(num1.value) % parseInt(num2.value) 
// }



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
































