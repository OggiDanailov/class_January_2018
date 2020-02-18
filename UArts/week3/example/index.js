var database = [
	{name: "Oggi", password: "1234"},
	{name: "Boro", password: "2345"},
	{name: "Spas", password: "3456"},
	{name: "Rad", password: "4567"}
]

var name = document.getElementById('name')
var password = document.getElementById("password")
var sumbit = document.getElementById("submit")
var welcome = document.getElementsByClassName('welcome')[0]
var ageSubmit = document.getElementById('age-submit')
var ageInput = document.getElementById('age-input')
var age = document.getElementsByClassName('age')[0]

submit.addEventListener("click", function() {
	for(var i = 0;i<database.length;i++){
		if(database[i].name == name.value && database[i].password == password.value) {
			welcome.style.display = 'block'
			welcome.innerHTML = "Welcome " + database[i].name
			age.style.display = 'block'

			checkAge()
		} else {
			welcome.style.display = 'block'
			welcome.innerHTML = "Hmm, something went wrong; no such user"
			welcome.style.background = 'salmon'
		}
	}


}) 

function checkAge() {
	ageSubmit.addEventListener("click", function() {
		if(ageInput.value >= 18) {
			document.body.style.backgroundColor = 'red'
			console.log(typeof parseInt(ageInput.value))
		} else {
			alert("you are too young")
		}
	})
}

var eleven = document.getElementsByClassName('eleven')[0]

eleven.addEventListener("click", function(e) {
	console.log(e.target.innerText)
})


