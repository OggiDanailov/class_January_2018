var word = "whatever"
var wordAr = word.split("")

// this creates the red box
var letters = document.createElement('div')
letters.style.width= "400px";
letters.style.height = "80px";
letters.style.border= "3px solid red";
letters.style.margin = "0 auto";
document.body.appendChild(letters)

// here the dashes appear visible on the screen
	var empty = []
	for(let i = 0;i<word.length; i++){
		empty[i] = (" " + "_"+ " ")
	letters.innerHTML += empty[i]	  
	}


// here I substitute all the dahses with the correct letters
function guessWord(letter){
	for(let i =0;i<wordAr.length;i++){
		if(letter == wordAr[i]){
			empty[i] = wordAr[i]
		}
		letters.innerHTML = empty
		
	}
		
}






