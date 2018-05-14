// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");


// var width = canvas.width;
// var height = canvas.height;
//   var x = 0;
//   var y = 0;
//   var dx = 3;
  
// //    var rectangle = new Path2D();
// //     rectangle.rect(10, 10, 50, 50);

// //     var rectangle2 = new Path2D();
// //     rectangle2.rect(150, 10, 50,50)

// //     var circle = new Path2D();
// //     circle.moveTo(125, 35);
// //     circle.arc(100, 35, 25, 0, 2 * Math.PI);
// //     ctx.fillStyle = 'orange'


// //     ctx.stroke(rectangle);
// //     ctx.fill(rectangle2);
// //     ctx.fill(circle);


// // var width = canvas.width;
// // 	var height = canvas.height;
// // 	var x = width/2;
// // 	var y = 300;

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


var word = 'abracadabra'
var wrong = [];
var right = []
var lives = 5;

var wrapper = document.createElement('div')
wrapper.style.width = "90%";
wrapper.style.margin = '0 auto'
wrapper.style.border = '2px solid orange'
document.body.appendChild(wrapper)

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// for(let i = 0;i<26;i++){
//     var alpha = document.createElement('div')
//     alpha.style.width = '20px'
//     alpha.style.border = '2px solid red'
//     alpha.style.textAlign = 'center';
//     alpha.style.display = 'inline-block'
//     alpha.style.margin = '5px'
//     alpha.classList.add('a')
//     // alpha.className = 'a'
//     alpha.innerHTML = alphabet[i]
//     wrapper.appendChild(alpha)
//     var boxes = document.getElementsByClassName('a')
//     boxes[i].addEventListener('click', function(event){
//         checkWord(event.target.innerHTML)
//     })

// }


// // function checkWord(x){
// //   for(let i =0;i<word.length;i++){
// //     if(x == word[i]){

// //       right.push(x)
// //     }
// //   }  
// //   if(word.indexOf(x) == -1){
// //     wrong.push(x)
// //     count()
// //   }
// //   console.log("right " + right )
// //   console.log("wrong " + wrong)
// // }




// // function count(){
// //   lives -= 1;
// //   console.log(lives)

// //   }

// // Create HTML elements that give you a word to guess and a hint; hint is originally hidden so in order to use it
// // you have to press a button. When you press the hint button you loose one live

// // var array  =['jersey', 'football', 'baseball', 'hockey'];
// // var hints = ["bad place in the NOrthEast", "handpapaya", 'boring', 'bearable']

// // var lives = 5;
// // random = Math.floor(Math.random() * array.length)

// // var word = document.createElement('div')
// // word.style.width = "80%";
// // word.style.margin =  "0 auto";
// // word.style.height = "40px";
// // word.style.border = '2px solid green'
// // word.innerHTML = array[random]
// // wrapper.appendChild(word)

// // var button = document.createElement('button')
// // button.innerHTML = 'take a hint!'
// // button.setAttribute('id', 'button')
// // wrapper.appendChild(button)

// // button.addEventListener('click', hinting)

// // function hinting(){
// //   lives -= 1;
// //   var hint = document.createElement('div')
// //   hint.style.width = "80%"
// //   hint.style.margin =  "50px auto";
// //   hint.style.height = "40px";
// //   hint.style.border = '6px solid red'
// //   hint.style.backgroundColor = 'salmon'
// //   hint.innerHTML =  hints[random]

// //   wrapper.appendChild(hint)
// //   console.log(lives)
// //  }








  











