var box = document.getElementById('box')

// function appear(){
// 	box.style.display = 'block';
// }

// var currentOpacity = 0;
// var clearOpacity;

// function opacityIncrease(){
// 	if(currentOpacity<=1){
// 		currentOpacity += 0.01;
// 		box.style.borderRadius = (currentOpacity * 100) + 'px';
// 		if(currentOpacity * 100 < 40){
// 			box.style.backgroundColor = 'purple'
// 		}else if(currentOpacity * 100 < 80){
// 			box.style.backgroundColor = 'red'
// 		}else {
// 			box.style.backgroundColor = 'green'
// 		}
// 		box.style.opacity = currentOpacity;	
// 	}else {
// 		clearInterval(clearOpacity)
// 	}
// }

// window.addEventListener('load', function(){
// 	setTimeout(function(){
// 		appear();
// 		clearOpacity = setInterval(opacityIncrease, 50)
// 	}, 3000)
// })

var count = 0;
var setTime;
function createBoxes(){
	var box = document.createElement('div')
	box.style.width = "100px";
	box.style.height = "100px";
	box.style.margin = '10px'
	box.style.float = 'left';
	document.body.appendChild(box)
	count = count +  1;
	if(count % 2 === 0){
		box.style.backgroundColor = 'purple'
	}else {
		box.style.backgroundColor = 'red'
	}
	if(count == 20){
		clearInterval(setTime)
	}

	
}



function start(){
	setTimeout(function(){
		setTime = setInterval(createBoxes, 300)
	}, 2000)
}

window.addEventListener('click', start)













