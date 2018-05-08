var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var width = canvas.width;
var height = canvas.height;
  var x = 0;
  var y = 0;
  var dx = 3;
  
   var rectangle = new Path2D();
   lineWidth = 30;
    rectangle.rect(10, 10, 50, 50);

    var rectangle2 = new Path2D();
    rectangle2.rect(150, 10, 50,50)

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange'


    ctx.stroke(rectangle);
    ctx.fill(rectangle2);
    ctx.fill(circle);










// var width = canvas.width;
// 	var height = canvas.height;
// 	var x = width/2;
// 	var y = 300;

// // ship form
// function drawShip(){
// 	ctx.beginPath();
//   clearing()
// 	ctx.rect(x, y ,50, 20);
// 	ctx.fillStyle = "#FF0000";
// 	ctx.fill();
// 	ctx.closePath();

// }

// function clearing(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
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


// // create bullet

// function createBullet(){
// 		ctx.beginPath()
//     reset()
// 		ctx.arc(x, y, 3, 0, Math.PI*2, true);
// 		ctx.fillStyle = "black";
// 		ctx.fill();
// 		ctx.closePath();
//     var dy = -10;
  
//     y += dy;
  
//   if(y >= height){
//     y = height;
//   } 
	
// }



// function reset(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }



// document.addEventListener('keydown', function(e){
// 	if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
// 		moveShip(e)			
// 	}
// 	if(e.keyCode == 32){
// 		setInterval(function(){
// 			createBullet()
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

// var canvas;  
// var ctx;
// var x = 400;
// var y = 300;
// var dx = 2;
// var dy = 2;
// var width = 480;
// var height = 320; 

// function circle(x,y,r) {
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, Math.PI*2, true);
//   ctx.fill();
// }

// function rect(x,y,w,h) {
//   ctx.beginPath();
//   ctx.rect(x,y,w,h);
//   ctx.closePath();
//   ctx.fill();
// }

 
// function reset() {
//   ctx.clearRect(0, 0, width, height);
// }

// function init() {
//   canvas = document.getElementById("canvas");
//   ctx = canvas.getContext("2d");
//   return setInterval(animate, 10);
// }


// function animate() {
//   reset();
  // ctx.fillStyle = "red";
  // rect(0,0,width,height);
  // ctx.fillStyle = "green";
  // circle(x, y, 10);

  // if (x + dx > width || x + dx < 0)
  //   dx = -dx;
//   if (y + dy > height || y + dy < 0)
//     dy = -dy;

//   // x += dx;
//   y += dy;
// }

// init();

















