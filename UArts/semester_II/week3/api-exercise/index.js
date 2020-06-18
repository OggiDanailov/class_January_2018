
let submit = document.getElementById("submit")

$(document).ready(function() {

	submit.addEventListener("click", fireAjax)

	function fireAjax() {
		let input = document.getElementById("input")
		$.ajax({
		url: "http://www.omdbapi.com/?apikey=3fbe8f08&",
		data: {s: input.value},
		success: function(result) {
			listArray(result)
		} 
		})		
	}


	function listArray(movies) {
		console.log(movies)
		for(let i = 0; i< movies.Search.length; i++) {
				let poster = document.createElement("div")
				let title = document.createElement("h2")
				poster.classList.add("poster")
				poster.style.backgroundImage = "url(" + movies.Search[i].Poster  + ")"
				title.innerHTML = movies.Search[i].Title
				document.body.appendChild(poster)
				document.body.appendChild(title)
		}

	}

})



	

	
