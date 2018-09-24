var button = document.getElementsByClassName('button')
var target = document.getElementById('target')
var array = ['green', 'blue', 'red', 'orange']


for(let i=0;i<button.length;i++){
	button[i].addEventListener('click', function(){	
		console.log(i + 1)
	showColor(i)
	})

}


function showColor(x){
	// console.log('For ' + array[x] + " color I pressed " + (x + 1))
	target.style.backgroundColor = array[x];
}

//////

// Code above demonstrates a classic JavaScript closure problem. 
// Reference to the i variable is being stored in the click handler closure, 
// rather than the actual value of i.

// Every single click handler will refer to the same object because there’s 
// only one counter object which holds 6 so you get six on each click.

// General workaround is to wrap this in an anonymous function and pass i 
// as argument. Such issues can also be avoided now by using let instead 
// var as shown in code below.

//when it is var you console.log withing the callback function you will get 4 - it returns the 
//the last number from the loop;










































