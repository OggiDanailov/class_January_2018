// Createa grid of buttons that, when you press them divs appear and disappear
var wrapper = document.createElement('div')
wrapper.style.width = '90%'
wrapper.style.border = "2px solid orange";
wrapper.style.margin = '0 auto';
wrapper.style.display = 'grid';
wrapper.style.gridGap = '10px';
wrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
document.body.appendChild(wrapper)

var array = ['button'];
var color = ['#66CDAA', '#66CDfA', '#66FDAA', "#65ADAA", "#12CDAA", "#66CDBB", "#66DDAA", "#122DAA", "#6643AA", "#43CDAA", "#66CDDD", "#13456A"]

for(let i =0;i<12;i++){
	var element = document.createElement('div');
	element.style.width = '90%'
	element.style.height = '200px'
	element.style.border = "2px solid purple";
	element.style.margin = '20px auto';
	wrapper.appendChild(element)

	var images = document.createElement('div')
	images.style.width = '80%'
	images.style.height = '150px'
	images.style.border = "2px solid pink";
	images.style.margin = '10 auto';
	images.style.backgroundColor = color[i]
	images.classList.add("images")
	element.appendChild(images)


	var buttons = document.createElement('div')
	buttons.style.width = '50%'
	buttons.style.height = '20px'
	buttons.style.border = "2px solid black";
	buttons.style.margin = '0 auto';
	buttons.style.textAlign = 'center'
	buttons.style.backgroundColor = color[i]
	buttons.innerHTML = array + (i+1);
	buttons.classList.add('buttons') 
	element.appendChild(buttons)
	changeAppearance(i)
}



function changeAppearance(button){
	var buttons = document.getElementsByClassName("buttons")
	var images = document.getElementsByClassName("images")

		buttons[button].addEventListener('click', function(){
			
			if(images[button].style.visibility == 'hidden'){
				images[button].style.visibility = 'visible'
			}else {
				images[button].style.visibility = "hidden"
			}
	})	
}










