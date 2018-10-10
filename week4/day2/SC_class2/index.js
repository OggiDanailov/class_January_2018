
SC.initialize({
	client_id: 'f665fc458615b821cdf1a26b6d1657f6'
})

// this should give you a given song by ID:

// SC.get("/tracks/239777850").then(function(response) {
// 	console.log(response)	
// });


// this gives you a song request:

SC.get("/tracks", 
	{q: 'whatever'
}).then(function(response){
	console.log(response[0])
})

// this will play a song:

// SC.stream("/tracks/239777850").then(function(player){
// 	player.play()
// })

// player.pause()
// will pause it