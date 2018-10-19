
var wrapper = document.createElement('div')
wrapper.style.border = "5px solid black"
wrapper.style.width = '800px'
wrapper.style.margin = '0 auto'
document.body.appendChild(wrapper)

var button = document.createElement('BUTTON')
var text = document.createTextNode("Restore")
button.appendChild(text)
button.style.backgroundColor = 'grey';
button.style.border = '2px solid'
button.classList.add('button');
document.body.appendChild(button)
var btn = document.getElementsByClassName('button')[0]													



function chess(){
	for(let i = 0;i < 8; i++){
		for(let j=0;j<8;j++){
			var block = document.createElement('div')
				block.classList.add('buttons')
				block.style.width = '100px'
				block.style.height='100px'
				block.style.display = 'inline-block'
				wrapper.appendChild(block)
			if(i%2 == 0){
				if(j%2 == 0){	
					block.style.backgroundColor = 'black'
					
				}else {
					
					block.style.backgroundColor = 'grey'
				}	
			}else {
				if(j % 2 == 0){
					
					block.style.backgroundColor = 'grey'
				}else {
					
					block.style.backgroundColor = 'black'
				}
			}
		}
	}
	passFurther()
}

function passFurther(){
	var buttons = document.getElementsByClassName('buttons')
	for(let i =0;i<buttons.length;i++){
		buttons[i].addEventListener('click', function(){
			changeColor(i, buttons)
		})
	}	
}

function changeColor(x, buttons){
	if(buttons[x].style.backgroundColor == 'black'){
		buttons[x].style.backgroundColor = 'red'
		btn.style.backgroundColor = 'red'
	}
	if(buttons[x].style.backgroundColor == 'grey'){
		buttons[x].style.backgroundColor = 'blue'
		btn.style.backgroundColor = 'blue'
	}
	restore(x, buttons)
}



function restore(x, buttons){
	btn.addEventListener('click', function(){
		btn.style.backgroundColor = 'grey'
			if(buttons[x].style.backgroundColor == 'red'){
				buttons[x].style.backgroundColor = 'black'	
			}
			if(buttons[x].style.backgroundColor == 'blue'){
				buttons[x].style.backgroundColor = 'grey'	
			}

		})
}



window.onload = chess();






	