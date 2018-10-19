var input = document.getElementById('input')
var submit = document.getElementById('submit')
var submittedLetters = []
var word = 'awkward'
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function createLetters(){
	for(let i  = 0; i<lettersArray.length;i++){
		var letter = document.createElement('div')
		letter.style.width = '20px'
		letter.style.height = '20px'
		letter.style.margin = '10px'
		letter.style.border = '2px solid'
		letter.style.textAlign = 'center'
		letter.style.display = 'inline-block'
		letter.classList.add('letters')
		letter.innerHTML = lettersArray[i]
		document.body.appendChild(letter)
	}
	chooseLetters()
}


function chooseLetters(){
	var letters = document.getElementsByClassName('letters')
		for(let i = 0;i<letters.length;i++){	
			letters[i].addEventListener('click', function(){
					letters[i].style.display = 'none';
					checkLetters(lettersArray[i])
			})
		}
}

function checkLetters(x){
	for(let i = 0;i<word.length;i++){
		if(x == word[i]){
			submittedLetters.push(word[i])
		}
	}
	console.log(submittedLetters)
}


window.onload = createLetters()

