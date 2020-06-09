// create keyboard using js; it should allow you to type the letters on the screen
// using keyboard that you created

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let screen = document.getElementById("screen")

for(let i = 0; i < alphabet.length; i++) {
	let keys = document.createElement("div")
	keys.style.border =  "1px solid black";
	keys.style.display = "inline-block"
	keys.style.padding = "5px"
	keys.style.marginRight = "5px"
	keys.classList.add("keys")
	keys.innerHTML = alphabet[i]
	document.body.appendChild(keys)
}

var keys = document.getElementsByClassName("keys")

for(let i = 0; i< keys.length; i++) {
	keys[i].addEventListener("click", function(e) {
		screen.innerHTML += e.target.innerHTML
	})
}

