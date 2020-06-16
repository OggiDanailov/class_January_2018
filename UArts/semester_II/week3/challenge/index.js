let writers = [
	{
		name: "Edgar Allan Poe",
		country: "USA",
		books: ["the raven", "the gold bug", "the murders of street Morgue"]
	},
	{
		name: "Feodor Dostoyevsky",
		country: "Russia",
		books: ["crime and punishment", 'idiot', "Karamazovs' brothers", "the possessed"]
	},
	{
		name: "John Stienbeck",
		country: "USA",
		books: ["east of eden", "for mice and men", "grapes of wrath"]
	},
	{
		name: "Umberto Ecco",
		country: "Italy",
		books: ["the name of the rose", "Foucault's Pendulum"]
	},
	{
		name: "Leo Tolstoy",
		country: "Russia",
		books: ["war and peace", "Anna Karenina"]
	},
	{
		name: "Emilio Salgary",
		country: "Italy",
		books: ["the last battle of Sandokan", "secrets of the dark jungle", "the black crosair"]
	}
]


// 1. list all the writers
// 2. list the books of each writer 
// 3. list writers according to the countries (if you have time try to create input box that filters writers according to nationality)

let input = document.getElementById("input")
let submit = document.getElementById("submit")

for(let i = 0; i < writers.length; i++) {
	let wrapper = document.createElement("div")
	wrapper.style.width = "200px"
	wrapper.style.border = '1px solid'
	let name = document.createElement("div")
	name.style.color = 'red'
	name.style.fontSize = '22px'
	name.innerHTML = writers[i].name
	document.body.appendChild(wrapper)
	wrapper.appendChild(name)
	for(let j = 0; j < writers[i].books.length; j++) {
		let country = document.createElement("div")
		country.innerHTML = writers[i].books[j]
		wrapper.appendChild(country)
	}

}

submit.addEventListener("click", function() {
	for(let i = 0 ;i < writers.length; i++) {
		let wrapper = document.createElement("div")
		wrapper.style.marginTop = "30px"
		if(input.value.toLowerCase() === writers[i].country.toLowerCase()) {
			wrapper.innerHTML = writers[i].name
		}
		document.body.appendChild(wrapper)
	}
})

