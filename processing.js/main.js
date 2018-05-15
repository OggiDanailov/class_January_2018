function setup(){
	createCanvas(500, 300)

}

// 1. background - only for the whole createCanvas
// you have to put it in the draw function in order to move elements; not leave trails
// 2. stroke - the color of the line of shape
// 3. fill fills the interior of the shape
// 2 and 3 have to be written BEFORE the shape!!
// stroke
// fill
// rect

var speedX  = 1;
var speedY = 4;
var x = 20;
var y = 124;


function draw(){
	// this function is looping over and over again
background(221, 143,32)	

stroke(255, 0 , 0)
fill(0,0, 255)
rect(32,32,32,32)

stroke(0)
fill(133,133,133)
rect(132,132,32,32)

stroke(32)
// noStroke()
fill(233, 43, 1)
ellipse(x, y, 23,23)
x = x + speedX
if (x > width || x < 0)  {
     	speedX = -speedX;
  	}

y += speedY;
if(y> height || y <0){
	speedY =- speedY
}if(y>100 && y <250){
	y += speedY *2
}



}






































