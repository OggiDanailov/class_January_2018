var button = document.getElementById('button')
var text = document.getElementsByClassName('text')[0]

button.addEventListener('click', function(){
	console.log('whatever')
	document.body.style.backgroundColor = 'green';
	text.innerHTML = 'Hello from the underworld!!'
})
