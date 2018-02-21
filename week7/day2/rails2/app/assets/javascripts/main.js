$(document).ready(function(){


var blogList = document.getElementById("blogList")


blogList.addEventListener('mouseover', changeColor)

	function changeColor(){
		blogList.style.backgroundColor = 'pink'
		blogList.style.width = '400px'
		blogList.style.height = '50px'
		blogList.style.boxShadow = '5px 5px 5px black'
		blogList.style.lineHeight = '50px'
	}

})