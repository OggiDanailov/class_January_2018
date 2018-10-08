var array = [12, 13, 14]
var counter = 0;
var left = document.getElementById('left')
var right = document.getElementById('right')
var mainImage = document.querySelector(".main-image")

 

class Pokemon{
	constructor(url, name){
		this.url = url;
		this.name = name;
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
	console.log(x)
	a = new Pokemon()
	a.url = x.sprites.front_default
	a.name = x.name
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






