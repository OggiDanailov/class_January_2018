var array = [12, 13, 14]
var counter = 0;
var left = document.getElementById('left')
var right = document.getElementById('right')
var mainImage = document.querySelector(".main-image")

// right.addEventListener('click', function(){	
// 	counter += 1;
// 	if(counter > 2){
// 		counter = 0;
// 	}		
// 	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter]  + ".json",
// 		data: {},
// 		dataType: "json",
// 		success: function(response){
// 			mainImage.style.backgroundImage = "url(" + response.sprites.front_default + ")"
// 			mainImage.style.backgroundSize = "100% 100%"
// 			mainImage.style.border = '2px solid';
// 			mainImage.style.width = '300px'
// 			mainImage.style.height = '300px'
// 			mainImage.style.margin = '20px auto'
// 			document.querySelector(".name").innerHTML = response.name;
// 			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
// 			document.querySelector(".attack").innerHTML = response.stats[4].stat.name
// 			document.querySelector(".defence").innerHTML = response.stats[3].stat.name
// 		}
// 	})			
// })

// 	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter]  + ".json",
// 		data: {},
// 		dataType: "json",
// 		success: function(response){
// 			mainImage.style.backgroundImage = "url(" + response.sprites.front_default + ")"
// 			mainImage.style.backgroundSize = "100% 100%"
// 			mainImage.style.border = '2px solid';
// 			mainImage.style.width = '300px'
// 			mainImage.style.height = '300px'
// 			mainImage.style.margin = '20px auto'

// 			document.querySelector(".name").innerHTML = response.name;
// 			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
// 			document.querySelector(".attack").innerHTML = response.stats[4].stat.name
// 			document.querySelector(".defence").innerHTML = response.stats[3].stat.name
// 		}
// 	})

// var a;

class Pokemon{
	constructor(url, name){
		this.url = url;
		this.name = name;
	}
}

class Trainer {

	all(){

	}
}


	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[0] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)
		}
	})

right.addEventListener('click', function(){	
	console.log('asdfasdf')
	counter += 1;
	if(counter > 2){
		counter = 0;
	}
	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)
		}
	})
})

left.addEventListener('click', function(){	
	console.log('asdfasdf')
	counter -= 1;
	if(counter < 0){
		counter = array.length-1;
	}
	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)
		}
	})
})



function builtClass(x){
	a = new Pokemon(x.sprites.front_default, x.name)
	format(a)
}


function format(y){
			mainImage.style.backgroundImage = "url(" + y.url+ ")"
			mainImage.style.backgroundSize = "100% 100%"
			mainImage.style.border = '2px solid';
			mainImage.style.width = '300px'
			mainImage.style.height = '300px'
			mainImage.style.margin = '20px auto'
			document.querySelector(".name").innerHTML = y.name;

}






