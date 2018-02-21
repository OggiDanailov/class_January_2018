$(document).ready(function(){


var blogList = document.getElementById("blogList")

blogList.addEventListener('mouseover', changeColor)

function changeColor(){
	blogList.style.backgroundColor = 'pink'
	blogList.style.width = '400px'
	blogList.style.height = '50px'
}

})