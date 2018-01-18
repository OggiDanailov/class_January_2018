var text = document.getElementById('writer')

document.addEventListener('keypress', function(e){
	// console.log(e)
	text.innerHTML = e.key
})