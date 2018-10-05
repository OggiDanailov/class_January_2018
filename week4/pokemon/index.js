var array = [12, 13, 14]
var counter = 0;
var left = document.getElementById('left')
var right = document.getElementById('right')
var mainImage = document.querySelector(".main-image")

right.addEventListener('click', function(){	
	counter += 1;
	if(counter > 2){
		counter = 0;
	}		
	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter]  + ".json",
		data: {},
		dataType: "json",
		success: function(response){
			mainImage.style.backgroundImage = "url(" + response.sprites.front_default + ")"
			mainImage.style.backgroundSize = "100% 100%"
			mainImage.style.border = '2px solid';
			mainImage.style.width = '300px'
			mainImage.style.height = '300px'
			mainImage.style.margin = '20px auto'
			document.querySelector(".name").innerHTML = response.name;
			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
			document.querySelector(".attack").innerHTML = response.stats[4].stat.name
			document.querySelector(".defence").innerHTML = response.stats[3].stat.name
		}
	})			
})

	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter]  + ".json",
		data: {},
		dataType: "json",
		success: function(response){
			mainImage.style.backgroundImage = "url(" + response.sprites.front_default + ")"
			mainImage.style.backgroundSize = "100% 100%"
			mainImage.style.border = '2px solid';
			mainImage.style.width = '300px'
			mainImage.style.height = '300px'
			mainImage.style.margin = '20px auto'

			document.querySelector(".name").innerHTML = response.name;
			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
			document.querySelector(".attack").innerHTML = response.stats[4].stat.name
			document.querySelector(".defence").innerHTML = response.stats[3].stat.name
		}
	})


class Pokemon{
	constructor(url, name, hp, attack,defence){
		this.url = url;
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defence = defence
	}

	imageRender(){
		
	}
}






