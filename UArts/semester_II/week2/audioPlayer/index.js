let playButton = document.getElementById("playButton")
let pauseButton = document.getElementById("pauseButton")
let nextButton = document.getElementById("nextButton")

var song1 = "audio/a.mp3"
var song2 = "audio/b.mp3"
var song3 = "audio/c.mp3"

let myAudio = new Audio();
songs = [song1, song2, song3]
let currentSong = 0;


playButton.addEventListener("click", function () {
	myAudio.src = songs[currentSong]
	myAudio.play()
	myAudio.addEventListener("ended", function () {
		nextSong()
	})
})

pauseButton.addEventListener("click", function () {
	myAudio.src = songs[currentSong]
	myAudio.pause()
})

nextButton.addEventListener("click", nextSong)


function nextSong () {
		currentSong++
	if(currentSong > songs.length-1) {
		currentSong = 0
	}
	myAudio.src = songs[currentSong]
	myAudio.play() 
}

