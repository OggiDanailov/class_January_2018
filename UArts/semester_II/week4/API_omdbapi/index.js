$(document).ready(()=>{
	var container = document.getElementById('container')
	var title = document.getElementById('title')

		

submit.addEventListener("click", searchFilm)
let results = "";
function searchFilm () {
	$.ajax({
		url:  "http://www.omdbapi.com/?i=tt3896198&apikey=3fbe8f08",
		data: {s: title.value },
		success: function(result) {
			results = result
			listResults(results)
			searchResults(results)
		}
	})
}

	
function listResults (movie) {
	console.log(movie)
	let firstMovie = movie.Search[0]

	$("#titleMovie").html(firstMovie.Title)
	$("#year").html(firstMovie.Year)
	$("#poster").css({
		"background-image": "url(" + firstMovie.Poster + ")",
		"background-size" : "100% 100%"
	})

}								
									
	function searchResults(movie){
		for(let i = 0; i< movie.Search.length; i++) {
				var resultDiv = "<div class='result'><img src='" + movie.Search[i].Poster + "'>Title: " + movie.Search[i].Title + "</div>";
				container.innerHTML += resultDiv;			
		}
		linking(movie)

	}

function linking (movie) {
	let images = document.getElementsByClassName('result')
	for(let i = 0; i< images.length; i++) {
		images[i].addEventListener("click", function () {
			window.open("https://www.imdb.com/title/" + movie.Search[i].imdbID)
		})
	}
}



})
	