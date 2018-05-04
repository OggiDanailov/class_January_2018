SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'
})

var playButton = document.getElementById('playButton')
var pauseButton = document.getElementById('stopButton')
var nextButton = document.getElementById('nextButton')
var searchSongs = document.getElementById('searchSong')
var submit = document.getElementById('submit')
var image = document.getElementById('image')
var title = document.getElementById('title')
var songList = [];
var currentSong = 0;
// var myPlayer;



// SC.get("/tracks/239777850").then(function(response) {
// 	audio.src = response.stream_url;
// 	myJukebox.play();
// });
submit.addEventListener('click', search)

function search(){
	var song =  searchSongs.value
	SC.get("/tracks", {
		q: song
		}).then(function(response) {
			console.log(response)
			response.forEach(function(x){
				songList.push(x)
			})
			playButton.addEventListener('click', function(){
				// console.log(songList[0])
				SC.stream("/tracks/" + songList[currentSong].id ).then(function(player) {
				myPlayer = player
				myPlayer.play();
				image.innerHTML = "<img src=" + songList[currentSong].artwork_url + "></img>"
				title.innerHTML = songList[currentSong].title;
				});
			})

			pauseButton.addEventListener('click', function(){
				myPlayer.pause();		
			})	

			nextButton.addEventListener('click', function(){
				currentSong++;
				title.innerHTML = songList[currentSong].title;
				search();
			})
	});

}













