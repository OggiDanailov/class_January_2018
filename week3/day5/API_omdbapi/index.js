$(document).ready(()=>{

	document.getElementById('submit').addEventListener('click', function(event){
		event.preventDefault();

	var title = document.getElementById('title').value

	$.ajax({url: "http://www.omdbapi.com/?apikey=660a106a&",
				data: { s: 'alien'  },   
				dataType: "json",   
				success: function(response){
					console.log(response)
				    $("#text1").html(response.Title);
				    $("#text3").html(response.Director); 
				    $("#actors").html(response.Actors) 
				    $("#year").html(response.Year)
				    $("#plot").html(response.Plot)
					$("#text2").attr("src", response.Poster);
				}

			})


	})




})