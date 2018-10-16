var wrapper = document.createElement('div')
wrapper.style.border = "2px solid black"
wrapper.style.width = '800px'
wrapper.style.margin = '0 auto'
document.body.appendChild(wrapper)

	for(let i = 0;i < 8; i++){
		for(let j=0;j<8;j++){
			var block = document.createElement('div')
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