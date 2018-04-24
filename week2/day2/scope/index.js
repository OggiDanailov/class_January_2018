
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


// var submit = document.getElementById('submit')
var username = document.getElementById('username')



function submission(){
	console.log(username.value)
}

// Gives you a string of the text inside the element.
// var myVar = document.querySelector('p').textContent;
// Gives you the raw HTML representing the element.
// var myVar = document.querySelector('p').innerHTML;
// Also gives you the text of the element as a string.
// var myVar = document.querySelector('p').innerText;
// Gives you the child elements of the element.
// var myVar = document.querySelector('p').children;
// Gives you all the child nodes of the element.
// var myVar = document.querySelector('p').childNodes;


var header = document.getElementsByClassName("header")
for(var i=0;i<header.length;i++){
	console.log(header[i].textContent)
}

var one = document.getElementById('div1')
one.addEventListener('click', function(event){
	console.log(event.target.type)
})



