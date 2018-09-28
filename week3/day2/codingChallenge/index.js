document.body.style.margin = "0px"
document.body.style.padding = "0px"


for(let i = 0;i< 8;i++){
	var wrapper = document.createElement("DIV")
	wrapper.style.width= "800p x";
	wrapper.style.border = "1px solid orange";
	wrapper.style.margin = '0 auto';
	document.body.appendChild(wrapper);

	for(let i = 0;i<8;i++){
		var box = document.createElement('div')
		box.style.width = '100px'
		box.style.height = '100px'
		box.style.display = 'inline-block'
		
		if(i%2 == 0){
			box.style.backgroundColor = 'black'
		} else {
			box.style.backgroundColor = 'red'
		}

		wrapper.appendChild(box)
	}

}