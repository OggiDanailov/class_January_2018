function Song(filename, url){
	this.filename = filename;
	this.url = url;
}

var a = new Song('a', 'audio/a.mp3')
var song1 = new Song('song1', 'audio/song1.mp3')
var song2 = new Song('song2', 'audio/song2.mp3')
var bulgaria = new Song('bulgaria', 'audio/Bulgaria.mp3')
var russia = new Song('russia', 'audio/Russia.mp3')
var array = [a.url, song1.url, song2.url, bulgaria.url, russia.url]

// var myAudio = new Audio;

var playButton = document.getElementById('playButton')
var stopButton = document.getElementById('stopButton')

// playButton.addEventListener('click', playAudio)
// stopButton.addEventListener('click', stopAudio)
// nextButton.addEventListener('click', nextAudio)
// var currentSong = 0;

// function playAudio(){
// 	myAudio.src = array[0]
// 	myAudio.play()
// }

// function stopAudio(){
// 	myAudio.src = array[0]
// 	myAudio.pause()
// }

// function nextAudio(){
// 	currentSong++;
// 	myAudio.src = array[currentSong]
// 	myAudio.play()
	
// }

var audio = "audio/a.mp3"

var myAudio = new Audio()


playButton.addEventListener("click", function () {
	myAudio.src = audio
	myAudio.play()
	setInterval(function() {
		console.log(myAudio.currentTime	)	
	}, 1000)	
	
})


