var box = document.getElementById('box')
var title = document.getElementById('title')

box.addEventListener("click", function(){
	box.style.borderRadius = '50%'
	box.style.width = "150px"
	box.style.height = '150px'
	box.style.boxShadow = '5px 5px 5px teal'
	createBox()
	createTitle()
})

function createBox(){
	box2 = document.createElement('div')
	box2.style.borderRadius = '50%'
	box2.style.width = "150px"
	box2.style.boxShadow = '5px 5px 5px teal'
	box2.style.height = '150px'
	box2.style.margin = '10px auto'
	box2.style.backgroundColor = 'blue'
	document.body.appendChild(box2)
}

function createTitle(){
	title.style.display = 'block'
	title.style.margin = '20px auto'
	title.style.width = '30%'
	title.style.boxShadow = '5px 5px 5px teal'
}