var input = document.getElementById("input")
var submit = document.getElementById("submit")
var list = document.querySelector(".list")
var divs;
var elements;


submit.addEventListener("click", createElement)


function createElement(){
	var div = document.createElement('div')
	div.style.width = '60%'
	div.style.height = '50px'
	// div.style.border = '2px solid salmon'
	div.style.display = 'grid'
	div.style.gridTemplateColumns = '0.1fr 0.7fr 0.2fr'
	div.style.borderRadius = "10px"
	// div.style.backgroundColor = 'purple'
	div.style.border = '2px solid '
	div.style.margin = '5px auto'
	div.classList.add('divs')
	list.appendChild(div)

	var checked = document.createElement('div')
	checked.style.width = '60%'
	checked.style.height = '40px'
	checked.style.borderRadius = '10px'
	// checked.style.border = '2px solid purple'
	checked.style.padding = '5px'
	checked.classList.add('checks')
	// checked.style.backgroundColor = 'green'
	div.appendChild(checked)

	var element = document.createElement("div")
	element.style.width = "100%"
	element.style.height = '60px';
	element.style.padding = '5px'
	element.style.textAlign = 'center'
	element.style.lineHeight = '40px'
	// element.style.border = '2px solid purple'
	// element.style.backgroundColor = 'blue'
	element.classList.add('elements')
	element.innerHTML = input.value
	div.appendChild(element)

	var remove = document.createElement("div")
	remove.style.width = "100%"
	remove.style.height = '50px'
	// remove.style.border = '2px solid purple'
	remove.style.padding = '5px'
	// remove.style.backgroundColor = 'red'
	remove.classList.add('removes')
	div.appendChild(remove)

	var button = document.createElement('div')
	button.style.width = "50%"
	button.style.height = '25px'
	button.style.border = '2px solid'
	button.style.margin = '5px auto'
	button.innerHTML = 'Remove'
	button.style.padding = '3px'
	button.style.borderRadius = '10px'
	button.style.lineHeight = '25px'
	button.style.backgroundColor = 'salmon'
	button.classList.add('buttons')
	remove.appendChild(button)
	divs = document.getElementsByClassName("divs")
	for(let i = 0; i <divs.length;i++){
		removeItem(i)
		scratchItem(i)
	}
}

function removeItem(x){
	var buttons = document.getElementsByClassName("buttons")
	buttons[x].addEventListener('click', function(){
		divs[x].style.display = 'none'
	})
}

function scratchItem(x){
	var checks = document.getElementsByClassName('checks')
	var elements = document.getElementsByClassName("elements")
	elements[x].addEventListener('click', function(){
		elements[x].style.textDecoration = 'line-through';
		checks[x].style.backgroundImage = "url(" + "data:image/png;base64,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" + ")"
		checks[x].style.backgroundSize = "100% 100%"
	})

}






