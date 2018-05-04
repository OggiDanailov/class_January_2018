
$(document).ready(function(){


document.getElementById('submit').addEventListener("click", function(){
	var search = document.getElementById('search').value
	

	$.ajax({url: "http://www.omdbapi.com/?apikey=660a106a&",
		data: {plot: search},
		dataType: "json",
		success: function (response){
			var result = response.Search
			console.log(result[0].Poster)
			for(let i = 0;i<result.length;i++){
				var titleResult = document.createElement("div")
					titleResult.style.width = "60%"
					titleResult.style.border = '2px solid teal'
					titleResult.style.backgroundColor = "lightgrey"
					titleResult.style.margin = "20px auto"
					titleResult.style.display = 'inline-block'
					titleResult.style.boxShadow = "10px 10px black"
					titleResult.innerHTML += result[i].Title
					document.body.appendChild(titleResult)
					var poster = document.createElement('div')
					poster.style.width = "50%"
					poster.style.height = '400px'
					poster.style.border = '5px solid green'
					poster.style.boxShadow = "10px 10px black"
					poster.style.backgroundSize = "100% 100%"
					poster.style.backgroundImage = "url(" + result[i].Poster + ")"
					document.body.appendChild(poster)
					
			}
			
		} 

	})




})





})