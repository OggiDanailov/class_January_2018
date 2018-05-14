

function Ship(){
	this.x = width/2;
	this.y = height-30;
	this.width = 30;
	this.height = 30;
	this.show = function(){
		ellipse(this.x, this.y, this.width, this.height)
		fill(0, 0, 0)	
	}
	this.move = function(direction){
		if(direction == "ArrowRight"){
		this.x += 10;								
		}
		else if(direction == "ArrowLeft"){
			this.x -= 10;
		}else if(direction == 'ArrowUp'){
			this.y -= 10;
		}else if(direction == 'ArrowDown'){
			this.y += 10;
		}	
	}
	this.cannon = function(){
			ellipse(this.x, this.y, this.width/3, this.height/3)
			fill(120, 210, 120)	
	}	
}

