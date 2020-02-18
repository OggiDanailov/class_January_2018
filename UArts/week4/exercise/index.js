// 1. Write a login that takes a username and password
// 2. It will check that the username is at least 4 characters login
// 3. It will check that the password has at least one number and at least 5 characters long
// 4. That there is no capitalization in the username 

let username = document.getElementById("username")
let password =  document.getElementById("password")
let submit =  document.getElementById("submit")
let userField = document.getElementsByClassName("user-name")[0]
let button = document.getElementsByClassName("button")[0]
let urlImages = document.getElementById("url-img")
let imageContainer = document.getElementsByClassName("image-wrapper")[0]
let imgArray = []



 let fourChar = function () {
 	if(username.value.length > 4 ) {
 		return true
 	} 
 }

 let checkNumber = function () {	
 	for(let i = 0; i < password.value.length; i++) {
 		if(isNaN(parseInt(password.value[i])) !== true && password.value.length > 5) {
 			return true
 		} 
 	}
 }

// function checkUsername(){
// 	var user = username.value.split("")
// 	for(let i = 0;i<user.length;i++){ 
// 		if(user[i] == 1 || user[i] == 2 || user[i] == 3 || user[i] == 4 || user[i] == 5 || user[i] == 6 || user[i] == 7 || user[i] == 8 || user[i] == 9){
// 			return true
// 		}
// 	}

// }


submit.addEventListener("click", validate)

function validate () {
	if(fourChar() && checkNumber() ) {
		userField.style.display = 'block'
		userField.innerHTML = "Hello " +  username.value
	} else {
		userField.style.display = 'block'
		userField.innerHTML = "Something went wrong! "
	} 
}


button.addEventListener('click', function() {
	imgArray.push(urlImages.value)
	for(let i = 0; i< imgArray.length;i++) {
		imageContainer.style.backgroundImage = "url(" + imgArray[i] + ")"
	}
})


