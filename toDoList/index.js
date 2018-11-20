var input = document.getElementById('input')
var submit = document.querySelector("#submit")
var list = document.querySelector(".list-area")

submit.addEventListener("click", addToList)
var elements;

function addToList(){
	if(input.value == ""){
		alert('please insert some content')
	}else {


	var check = document.createElement("div")
		check.style.border = '3px solid'
		list.appendChild(check)

	var element = document.createElement("li")
	element.style.width = "90%";
	element.style.border = "2px solid blue";
	element.style.margin = "5px auto";
	element.style.padding = '5px'
	// element.style.textAlign = 'center';
	element.style.listStyleType = "none"
	element.classList.add('elements')
	// element.style.fontSize = '20px'
	// element.style.padding = "0px 20px"
	elements = document.getElementsByClassName("elements")
	element.innerHTML = input.value
	list.appendChild(element)

	button = document.createElement("button")
	button.style.margin = "0px 180px";
	button.innerHTML = 'remove'
	button.classList.add("buttons")
	button.style.border = '2px solid orange'
	list.appendChild(button)
	var buttons = document.getElementsByClassName("buttons")
	for(let i = 0;i<buttons.length;i++){
		buttons[i].addEventListener("click", function(){
			removeButton(i)
		});
		elements[i].addEventListener("click", function(){
			scratchItem(i)
		})

	}
	}
}



function removeButton(el){
	elements[el].style.display = 'none'	
}

function scratchItem(el){
	elements[el].style.textDecoration = 'line-through'
	elements[el].style.backgroundColor = 'grey'

}










