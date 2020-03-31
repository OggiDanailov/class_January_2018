// write a small program that creates 100 boxes on the screen; every other box is red and should be 
// bigger than the other boxes



let wrapper = document.createElement("div")
wrapper.style.width = "90%";
wrapper.style.margin = "10px auto";
wrapper.style.display = 'grid'
wrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
document.body.appendChild(wrapper)
for(let i = 0;i<100;i++) {
	let box = document.createElement("div")
	box.style.margin = "5px"
	if(i % 2 !== 0) {
		box.style.width = "100px";
		box.style.height = "100px";
		box.style.backgroundColor = 'red'
	} else {
		box.style.backgroundColor = 'blue'
		box.style.width = '60px'
		box.style.height = '60px'		
	}
	
	wrapper.appendChild(box)
}