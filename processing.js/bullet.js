function Bullet(x, y){
	this.x = x;
	this.y = y;
	this.width = 7;
	this.height = 7;
	this.show = function(){
		ellipse(this.x, this.y, this.width, this.height)
		fill(0, 0, 0)	
		noStroke();
	}

	this.move = function(direction){
		if(direction == " "){
			this.y = this.y - 10;								
		}			
	}
}