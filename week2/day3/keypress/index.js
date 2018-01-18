var text = document.getElementById('writer')

window.addEventListener('keypress', function(e){
	text.innerHTML = e.key
})