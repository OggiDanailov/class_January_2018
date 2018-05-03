var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
	var height = canvas.height;
	var x = width/2;
	var y = 300;

// ship form
function drawShip(){
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.rect(x, y ,50, 20);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
}

// move ship
function moveShip(event){
	drawShip()
	var dx = -10;
	var dy = 10;
	console.log(x)
	if(event.key == "ArrowLeft"){
		x += dx;
	}	
	if(event.key == "ArrowRight"){
		x += dy;
	}
	if(x >= width-50){
		x = width-50;
	}	
		if(x <= 0){
		x = 0;
	}
}

var colors = ['blue', 'red', 'green', 'yellow', 'orange']
// create bullet

function createBullet(){
	for(let i = 0;i<5;i++){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath()
		ctx.rect(x + (i* 3), y-15, 7, 7);
		ctx.fillStyle = colors[i];
		ctx.fill();
		ctx.closePath();
	}
}



document.addEventListener('keydown', function(e){
	if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
		moveShip(e)			
	}
	if(e.keyCode == 32){
		createBullet()
	}
})



















