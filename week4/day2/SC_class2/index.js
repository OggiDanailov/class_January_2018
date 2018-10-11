// url:
// https://developers.soundcloud.com/docs/api/sdks


SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'
})


var	currentNumber = 0;
var artistName = document.getElementById('artist-name')
var submit = document.getElementById("submit-artist")
var playButton  = document.getElementById('playButton')
var stopButton  = document.getElementById('stopButton')
var image = document.getElementById('image')

// this should give you a given song by ID:

// SC.get("/tracks/239777850").then(function(response) {
// 	console.log(response)	
// });


// this gives you a song request:
submit.addEventListener('click', function(){
		SC.get("/tracks", 
			{q: artistName.value
		}).then(function(response){
			listOfSongs(response)
		})
})


function listOfSongs(array){
	console.log(array)
	var a = [];
	for(let i = 0;i<array.length;i++){
		a.push(array[i].id)
	}
	playMusic(a)
	poster(array[currentNumber].user.avatar_url)
}

var myPlayer = "";
var	count = 0

function poster(x){
	image.style.width = '300px'
	image.style.height = '300px'
	image.style.border = '4px solid'
	image.style.backgroundImage = "url(" + x + ")"
	image.style.backgroundSize = "100% 100%"
}

function playMusic(x){
		playButton.addEventListener('click', function(){
			console.log("play!!!!")
				SC.stream("/tracks/" + x[currentNumber]).then(function(player){
					myPlayer = player
					myPlayer.play();
				})
		})
		stopButton.addEventListener('click', function(){
			console.log('pause')
			myPlayer.play();
			myPlayer.pause()
		})
}






// this will play a song:

// SC.stream("/tracks/239777850").then(function(player){
// 	player.play()
// })

// player.pause()
// will pause it