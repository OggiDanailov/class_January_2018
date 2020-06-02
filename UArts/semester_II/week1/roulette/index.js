// create a roulette-type of a game;
// in each second there will be auto generated random number;
// the number must be a whole number
// the number should be printed on the screen;
// when the number is odd the background color should be red;
// when the number is even the background color should be blue;

//extra points - create two inputs where the user can insert max and min number
// and the random numbers will be generated ONLY between this range
// if it is zero then background color is green
// check out this link for more info:
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript


let max =  document.getElementById("max")
let min =  document.getElementById("min")
let number = document.getElementById("number")
let submit = document.getElementById("submit")

submit.addEventListener("click", function(e) {
		e.preventDefault()
		let maxValue = parseInt(max.value)
		let minValue = parseInt(min.value)
		generateRandom(maxValue, minValue )
})

function generateRandom (max, min) {
	setInterval(function () {
		var currentNumber = Math.floor(Math.random() * (max - min)) + min
		if(currentNumber  === 0 ) {
			number.style.background = 'green'
		} else if(currentNumber % 2 !== 0 ) {
			number.style.background = 'red'
		} else {
			number.style.background = 'blue'
		}
		number.innerHTML = currentNumber
	}, 1000)
}


	


