var text = document.getElementById('writer')

document.addEventListener('keypress', function(e){
	// console.log(e)
	text.innerHTML = e.key
})






var username = document.getElementById('username')
var password = document.getElementById('password')
var submit = document.getElementById('submit')


submit.addEventListener('click', function(){
	validateEntry()
})


function checkPassword(){
	if(password.value == 1234){
		return true
	}else {
		console.log("wrong password")
	}
}

function checkUsername(){
	var user = username.value.split("")
	for(let i = 0;i<user.length;i++){ 
		if(user[i] == 1 || user[i] == 2 || user[i] == 3 || user[i] == 4 || user[i] == 5 || user[i] == 6 || user[i] == 7 || user[i] == 8 || user[i] == 9){
			return true
		}
	}

}

function validateEntry(){
	if(checkUsername() == true && checkPassword() == true){
		alert("you signed in successfully")
	}else {
		alert("try again please")
		
	}
}



var target = document.getElementById('target')

target.addEventListener('click', function(event){
	event.target.style.backgroundColor = 'green'
})
























