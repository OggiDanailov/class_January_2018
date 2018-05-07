var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var width = canvas.width;
// 	var height = canvas.height;
// 	var x = width/2;
// 	var y = 300;

// // ship form
// function drawShip(){
// 	ctx.beginPath();
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	ctx.rect(x, y ,50, 20);
// 	ctx.fillStyle = "#FF0000";
// 	ctx.fill();
// 	ctx.closePath();
// }

// // move ship
// function moveShip(event){
// 	drawShip()
// 	var dx = -10;
// 	var dy = 10;
// 	console.log(x)
// 	if(event.key == "ArrowLeft"){
// 		x += dx;
// 	}	
// 	if(event.key == "ArrowRight"){
// 		x += dy;
// 	}
// 	if(x >= width-50){
// 		x = width-50;
// 	}	
// 		if(x <= 0){
// 		x = 0;
// 	}
// }

// var colors = ['blue', 'red', 'green', 'yellow', 'orange']
// // create bullet

// function createBullet(){
// 	for(let i = 0;i<5;i++){
// 		ctx.beginPath()
// 		// ctx.circle(x + (i* 3), y-15, 7, 7);
// 		ctx.arc(x, y, 10, 0, Math.PI*2, true);
// 		ctx.fillStyle = colors[i];
// 		ctx.fill();
// 		ctx.closePath();
// 	}
// }

// function moveBullet(e){
	
// 	var dy = -10;
// 	if(e.keyCode == 32){
// 		y += dy;
// 	}
// 	if(y >= height){
// 		y = height;
// 	}	
	
// }

// function reset(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }



// document.addEventListener('keydown', function(e){
// 	if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
// 		moveShip(e)			
// 	}
// 	if(e.keyCode == 32){
// 		createBullet()
// 		setInterval(function(){
// 			moveBullet(e)
// 		}, 100)
// 	}
// })

// experiemtns

// var canvas;  
// var ctx;
// var x = 400;
// var y = 300;
// var dx = 2;
// var dy = -8;
// var width = 400;
// var height = 300; 

// function clearCircle(){
// 	ctx.clearRect(0, 0, width, height);
// }

// function circle(x, y, r){
// 	ctx.beginPath();
// 	ctx.arc(x,y,10,0,2 * Math.PI);
// 	ctx.stroke()
// 	ctx.fillStyle = 'red'
// 	ctx.fill()
	

	

// }

// function animate(){
	
// 		y += dy
// 	circle(x, y, 10)
// }

// 	setInterval(function(){
// 		animate()
// 	}, 100)

// lesson example:

var canvas;  
var ctx;
var x = 400;
var y = 300;
var dx = 2;
var dy = 4;
var width = 400;
var height = 300; 

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}

// function rect(x,y,w,h) {
//   ctx.beginPath();
//   ctx.rect(x,y,w,h);
//   ctx.closePath();
//   ctx.fill();
// }

 
function reset() {
  ctx.clearRect(50, 20, width, height);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  return setInterval(animate, 10);
}


function animate() {
  reset();
  // ctx.fillStyle = "red";
  // rect(0,0,width,height);
  ctx.fillStyle = "green";
  circle(x, y, 10);

  if (x + dx > width || x + dx < 0)
    dx = -dx;
  if (y + dy > height || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}

// init();

















