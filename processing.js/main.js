var sq;
var bullet;
var bullets = [];

var enemies = [];
var speedX  = 1;
var speedY = 4;
var xShip;
var yShip;
var moving = 15
var width = 500;
var height = 300;

function setup(){
	createCanvas(500, 300)
	sq = new Square()

	for(let i = 0;i<12;i++){
		enemies[i] = new Enemies(20 + (i**2)*2, 40);
	}
	
}

// 1. background - only for the whole createCanvas
// you have to put it in the draw function in order to move elements; not leave trails
// 2. stroke - the color of the line of shape
// 3. fill fills the interior of the shape
// 2 and 3 have to be written BEFORE the shape!!
// stroke
// fill
// rect




function draw(){
	background(221, 143,32)
// this function is looping over and over again
	sq.draw()
	
	for(let i = 0;i<bullets.length;i++){
		bullets[i].draw()
		bullets[i].move()
		// for(let j = 0;j<enemies.length;j++){
		// 	if(bullets[i].hits(enemies[j])){
		// 		console.log('hit!!!')

		// 	}
		// }

	}

	for(let i = 0; i< 12; i++){
		// enemies.push(new Enemies)
		enemies[i].draw()

	}
	
	// stroke(32)
	// // noStroke()
	// fill(233, 43, 1)
	// ellipse(x, y, 23,23)
	// x = x + speedX
	// if (x >= width || x < 0)  {
	//      	speedX = -speedX;
	//   	}

	// y += speedY;
	// if(y>= height || y <0){
	// 	speedY =- speedY

	// }if(y> 100 && y <250){
	// 	y += speedY *4
	// }


	
}


function Square(){
	xShip = width/2 ;
	yShip =  height-30;
	this.draw = function(){		
		stroke(255, 0 , 0)
		fill(0,0, 255)
		rect(xShip ,yShip, 32, 32)
	}

	this.move = function(dir){
		if(dir == 'ArrowLeft'){

			if(xShip <= 0){
				xShip = 0
			}	
			xShip -=  moving;
		}else if(dir == 'ArrowRight'){
			if(xShip >= width-30){
				xShip = width-30

			}
				xShip += moving;
		}if(dir == 'ArrowUp'){
			if(dir <= 0){
				yShip = 0
			}
			yShip -= moving;

		}else if(dir == "ArrowDown"){
			yShip += moving;
		}

	}

}

function keyPressed(event){
	if(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp' || event.key == 'ArrowDown'){
		sq.move(event.key)
	}
	if(event.key == " "){
		bullets.push(new Bullet)
		console.log(bullets)
	}

}

function Bullet(){
	this.x = xShip;
	this.y = yShip;
	this.draw = function(){
		ellipse(this.x, this.y, 8, 8)	
	}
	this.move = function(){		
			this.y -= 2; 		
	}

}

function Enemies(x, y){
	this.x = x;
	this.y = y;
	this.draw = function(){
		fill(41)
		ellipse(this.x, this.y, 20, 20)
	}
}



































