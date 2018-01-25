function Song(filename, url){
	this.filename = filename;
	this.url = url;
}

var a = new Song('a', 'audio/a.mp3')
var array = [a.url]

var myAudio = new Audio;

var playButton = document.getElementById('playButton')
playButton.addEventListener('click', playAudio)


function playAudio(){
	myAudio.src = array[0]
	myAudio.play()
}



