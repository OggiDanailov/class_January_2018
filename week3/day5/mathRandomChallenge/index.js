var number  = document.createElement('div')
number.style.width= "500px"
number.style.height = '150px'
number.style.margin = "0 auto"
number.style.border = '2px solid'
document.body.appendChild(number)

var toggle = document.createElement('button')
toggle.innerHTML = 'toggle'
document.body.appendChild(toggle)

var stop = document.createElement('button')
stop.innerHTML = 'stop'
document.body.appendChild(stop)

toggle.addEventListener("click", myVar)
stop.addEventListener("click", stopping)

var myVar = setInterval(function(){
	var x = Math.floor(Math.random() * 100)
			
			if(x % 2 == 0){
				number.innerHTML = "The Number " + x + " is even "
				number.style.backgroundColor = 'red'
			}else {
				number.innerHTML = "The Number " + x + " is odd "
				number.style.backgroundColor = 'green'
			}
}, 1000)


// function starting(){				
								
// }

function stopping(){	
	clearInterval(myVar)
}






