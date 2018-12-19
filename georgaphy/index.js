var countryList = document.getElementsByClassName("all-countries")[0]
var country = document.getElementsByClassName("country")[0]


$.ajax({url: " ",
		success: function(response){
			// console.log(response)
			allCountries(response)
		}
})


function allCountries(countries){
	for(let i = 0; i<countries.length;i++){
		var country = document.createElement("div")
		country.style.border = "1px solid"
		country.style.display = 'inline-block'
		country.style.margin = "5px"
		country.style.padding = '2px'
		country.style.fontSize = "10px"
		country.classList.add("countries")
		country.innerHTML += countries[i].name
		countryList.appendChild(country)
	}
		var countries = document.getElementsByClassName('countries')
		for(let i = 0;i<countries.length;i++){
			countries[i].addEventListener('click', function(event){
				clickCountry(event.target.innerText)
				console.log(event)
			})
		}	
}

function clickCountry(name){
	$.ajax({url: "https://restcountries.eu/rest/v2/name/" + name + "?fullText=true",
		success: function(response){
			console.log(response)
			var wrapper = document.createElement('div')
			wrapper.style.width = '80%'
			wrapper.style.margin= "10px auto"
			wrapper.style.border = '2px solid orange'
			document.body.appendChild(wrapper)

			var cName = document.createElement("div")
			cName.style.width = "100%";
			cName.style.margin= "10px auto"
			cName.innerHTML = "Name of the country: " +  response[0].name
			wrapper.appendChild(cName)

			var cCaptial = document.createElement("div")
			cCaptial.style.width = "100%"
			cCaptial.innerHTML = "Captial city: " +  response[0].capital
			wrapper.appendChild(cCaptial)

			var cLanguages = document.createElement("div")
			cLanguages.style.width = "100%"
			cLanguages.innerHTML = "Languages spoken: " +  response[0].languages[0].name + " (" + response[0].languages[0].nativeName + ")"
			wrapper.appendChild(cLanguages)

			var cflag = document.createElement("div")
			cflag.style.width = "20%"
			cflag.style.height = "100px"
			cflag.style.margin = '0 auto'
			// cflag.style.border = '2px solid green'
			cflag.style.backgroundImage = "url(" + response[0].flag + ")"
			cflag.style.backgroundSize = "100% 100%"
			wrapper.appendChild(cflag)

			var population = document.createElement("div")
			population.style.width = "100%"
			population.innerHTML ="Current population: " +  response[0].population
			wrapper.appendChild(population)

			var area = document.createElement('div')
			area.style.width = "100%"
			area.innerHTML = "Size: " + response[0].area + " sq.km"
			wrapper.appendChild(area)
		}
	})
}
