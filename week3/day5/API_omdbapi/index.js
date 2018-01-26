$(document).ready(()=>{
	var container = document.getElementById('container')
	document.getElementById('submit').addEventListener('click', function(event){
		event.preventDefault();

		var title = document.getElementById('title').value

		$.ajax({url: "http://www.omdbapi.com/?apikey=660a106a&",
					data: { s: title  },   
					dataType: "json",   
					success: function(response){
						var a = response.Search[0]
						console.log(a)
					    $("#text1").html(a.Title);
					    $("#text3").html(a.Director); 
					    $("#actors").html(a.Actors) 
					    $("#year").html(a.Year)
					    $("#plot").html(a.Plot)
						$("#text2").attr("src", a.Poster);
						for(var i=0;i<response.Search.length;i++){ 
							searchResults(response.Search[i])
						}
						
					}
		})
	})									
									
	function searchResults(movie){
		var resultDiv = "<div class='result'><img src='" + movie.Poster + "'>Title: " + movie.Title + "</div>";
		container.innerHTML += resultDiv;
	}


})
	