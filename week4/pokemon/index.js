$.ajax({url: "https://pokeapi.co/api/v2/pokemon/14/",
	data: {},
	dataType: "json",
	success: function(response){
		console.log(response.name)
	}

})


setTimeout(whatever, 3000)

function whatever(){
	$.ajax({url: "https://pokeapi.co/api/v2/pokemon/21/",
		data: {},
		dataType: "json",
		success: function(response){
			console.log(response.name)
		}

	})
}