// 1. create five divs that contain each vowel in English through Javascript (hint: createElement,
	// createTextNode, appendChild)
//2. when you click each element that you created you console.log the corresponding letter ex: if you press 
// the box with letter 'a' you should get 'a' on the console hint: give class to each box and loop through them

var vowels = ['a', 'e', 'i', 'o', 'u']

for(let i=0; i<vowels.length; i++){
	var div = document.createElement('div')
	var letters = document.createTextNode(vowels[i])
	div.appendChild(letters)
	div.style.width= '30px';
	div.style.height='30px';
	div.style.border='2px solid';
	div.style.margin='10px';
	div.classList.add('boxes')
	document.body.appendChild(div);
	var boxes = document.getElementsByClassName('boxes');
	boxes[i].addEventListener('click', function(){
		show(i);
	})
}






function show(x){
	console.log(vowels[x])
}



