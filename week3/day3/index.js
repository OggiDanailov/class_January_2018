// write a function that takes an array as an argument and returns the highest number of this array


var imageContainer = document.getElementById('image-container')
var photoList = document.getElementById('photo-list')

var oslo = new Photo('oslo', 'Norway')
var copenhagen = new Photo('Copenhagen', "Denmark")
var helsinki = new Photo('Helsinki', "Finland")
var stockholm = new Photo('Stockholm', 'Sweden')

var cities = [oslo.name, copenhagen.name, helsinki.name, stockholm.name]


function Photo(name, location){
	this.name = name;
	this.location = location
}

function Album(){
	this.addCities = function(){}
	this.listCities = function(){}
	this.removeCity = function(){}
}

for(var i=0;i<cities.length;i++){
			photoList.innerHTML += '<div class="photos">' +  cities[i] + '</div';
		}

		for(let i=0;i<cities.length;i++){
			document.getElementsByClassName('photos')[i].addEventListener('click', function(){
			addImage(i)
			})
		}

function addImage(x){
	imageContainer.innerHTML = "<img class='images' src='img/"  + cities[x] + ".jpg'>"
}


var album = new Album()
var addCities = document.getElementById('addCities')
addCities.addEventListener('click', album.addCities)





