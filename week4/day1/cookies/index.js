var text = document.getElementById('name')
var submit = document.getElementById('submit')
var naming = document.getElementById('naming')



submit.addEventListener('click', function(){
	var cookie = Cookies.set('name', text.value, {expiry: new Date(2018, 0, 30)})
	alert(text.value)
})

naming.innerHTML = (Cookies.get('name') || null)



var number = document.getElementById('number')
var button = document.getElementById('button')
var zero = 0;
number.innerHTML = (Cookies.get('digit') || 0) 

function adding(){
	zero++;
	number.innerHTML = zero
	Cookies.set('digit', zero)
		 

}

button.addEventListener('click', adding)