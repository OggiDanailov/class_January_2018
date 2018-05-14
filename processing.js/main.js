var ship;
var bullet;
var bullets = []

function setup() {
	createCanvas(640, 480);
	ship = new Ship();
	bullet = new Bullet(width/2, height/2)
}

function draw() {
	background(0,40,40)	
	ship.show()
	ship.cannon()
	

}

window.addEventListener('keypress', function(event){
	keyPressed(event)
	
})

function keyPressed(event){	
	
	if(event.key == " "){
		bullet.show()
		bullet.move(event.key)		
	}

	if(event.key == "ArrowRight"){
		ship.move(event.key)
		clear();
	} else if(event.key == "ArrowLeft"){
		ship.move(event.key)
		clear();
	}else if(event.key == "ArrowUp"){
		ship.move(event.key)
		clear()
	}else if(event.key =='ArrowDown'){
		ship.move(event.key)
		clear()
	}


}





