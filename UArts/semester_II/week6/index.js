// Callback function

// - synchronous and asynchronous js

// - function in javascript is an object. Which means that you can pass a function as an argument
// and accept a function in another function as an argument. High-order function
// is a function that takes another function as an argument

//  

// var hello = function() {
// 	console.log("say hello")
// }

// setTimeout(hello, 1000)

// we also can insert annonymous function directly into the setTimeout function
// Another example of callback function = addEventListener(); we usually pass either
// annonymous function or function defined out there

let bands = [
	{name: "Deep Purple", style: "hard rock", started: 1968, country: "England"},
	{name: "Uriah Heep", style: "hard rock", started: 1970, country: "England"},
	{name: "Led Zeppelin", style: "hard rock", started: 1968, country: "England"},
	{name: "Black Sabbath", style: "hard rock", started: 1970, country: "England"},
	{name: "Yes", style: "progressive", started: 1968, country: "England"},
	{name: "ELP", style: "progressive", started: 1970, country: "England"},
	{name: "King Crimson", style: "progressive", started: 1969, country: "England"},
	{name: "Japan", style: "punk", started: 1978, country: "England"},
	{name: "Stranglers", style: "punk", started: 1975, country: "England"},
	{name: "Nina Hagen", style: "punk", started: 1978, country: "West Germany"}
]



function runBands (data, type, callback) {
	for( let i = 0; i < data.length; i++) {
		if(data[i].style === type) {
			 callback(data[i])
		}
	}
}

function listBandNames (arg) {
	if(arg.started < 1970) {
		console.log(arg.name)
	}
}

runBands(bands, "hard rock", listBandNames)








