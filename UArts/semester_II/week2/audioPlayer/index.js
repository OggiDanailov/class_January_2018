let playButton = document.getElementById("playButton")

var song = "audio/a.mp3"

let myAudio = new Audio();

playButton.addEventListener("click", function () {
	myAudio.src = song
	myAudio.play()
})