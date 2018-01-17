
// var c = 10;

// function hallo(){
// if(true){
// 	let c = 2;
//  }
// console.log(c);
//  //if var c = 2 it will print 2 on the console; if you change it to let it will print 10
// }

// EventHandling

var div3 = document.querySelector('#div3')
div3.addEventListener('click', function(){
	console.log('whatever')
})

var something = document.getElementsByClassName('something')[0];

something.addEventListener('click', function(){
	something.innerHTML = '<h2>Nothing</h2>'
})


var submit = document.getElementById('submit')
var username = document.getElementById('username')



function submission(){
	console.log(username.value)
}