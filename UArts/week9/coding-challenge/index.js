// let colors = ['red', 'blue', 'green','yellow', "pink", 'orange']

// let left = document.getElementById("left")
// let right = document.getElementById("right")

// let box = document.getElementById("box")
// let index = 0;


// left.addEventListener("click", moveLeft)
// right.addEventListener("click", moveRight)


// function assignColor() {
// 	box.style.background = colors[index +2]
// }

// function moveLeft() {
// 	index = index - 1;
// 	if(index < 0) {
// 		 index  = colors.length-1		
// 	}
// 	box.style.background = colors[index]
// }

// function moveRight () {
// 	index = index + 1
// 	if(index > colors.length-1 ) {
// 		index = 0;
// 	}
// 	box.style.background = colors[index]
// }


// window.onload = assignColor()




let toggleButton = document.getElementById("toggle-button")
let modal = document.getElementsByClassName("modal")[0]
let counter = 0;

toggleButton.addEventListener("click", function() {
	if(toggleButton.classList.contains("green-button")) {
		toggleButton.classList.add('red-button') 
		toggleButton.classList.remove('green-button') 
		toggleButton.innerHTML = "you clicked me"
		toggleModal()
	} else {
		toggleButton.classList.add('green-button') 
		toggleButton.classList.remove('red-button')
		toggleButton.innerHTML = "Click me"
		toggleModal()
	}
})

function toggleModal () {
	modal.classList.toggle("visible")
}





