
//  Create a webstie that:
//  - lists all the employees of the company;
//  - lists the amount allowed for business trips;
//  - selects each employee through a search function printing all details of him/her
//  - upon request shows how much money he spent on a business trip given that change was what the empolyee brought to the office.
//  - if there is an employee that spent less than 70% of the allowence it prints that 
//  he should be suggested for promotion; (use an array of these employees)
	// - you can select employees through location (city)
	// - you render the corresponding image of a city while you render the city's employees
	// - you can select employees through experience (years)


var employees = document.getElementsByClassName('employees')[0]
var finances = {
	images:[{Warsaw: 'https://static01.nyt.com/images/2015/12/27/travel/27WARSAW1/27WARSAW1-facebookJumbo.jpg'},
			{NYC: 'https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg'},
			{Sofia: 'https://freesofiatour.com/wp-content/uploads/2012/06/Sofia-vitosha-kempinski.jpg'},
			{Philadelphia: "https://assets.visitphilly.com/wp-content/uploads/2018/03/Philadelphia-Pass-Loews-Skyline-C.Smyth2200x1237-1024x576.jpg"}
	],
	employees: [
	{fname: "Oggi", lname: "Danailov", experience: 5, city: "Philadelphia"},
	{fname: "Boro", lname: "Ivanov", experience: 4, city: "Sofia"},
	{fname: "Spas", lname: "Domaratski", experience: 3, city: "Warsaw"},
	{fname: "George", lname: "Toshev", experience: 7, city: "Sofia"},
	{fname: "John", lname: "Smith", experience: 7, city: "Philadelphia"},
	{fname: "Rad", lname: "Burov", experience: 1, city: "Sofia"},
	{fname: "Vasil", lname: "Gunchev", experience: 5, city: "Sofia"},
	{fname: "James", lname: "Pileski", experience: 5, city: "NYC"},
	{fname: "Paul", lname: "McCartney", experience: 5, city: "NYC"},
	{fname: "Ringo", lname: "Starr", experience: 2, city: "NYC"},
	{fname: "Helen", lname: "Ortega", experience: 3, city: "Philadelphia"},
	{fname: "Scott", lname: "Mckenzie", experience: 4, city: "NYC"},
	{fname: "Anatoli", lname: "Zagorov", experience: 2, city: "Sofia"},
	{fname: "Maria", lname: "Wojcek", experience: 2, city: "Warsaw"},
	{fname: "Hilary", lname: "Larson", experience: 6, city: "Philadelphia"},
	{fname: "Anna", lname: "Love", experience: 6, city: "NYC"},
	{fname: "Michael", lname: "Jackson", experience: 4, city: "NYC"},
	{fname: "Lucy", lname: "Zolova", experience: 4, city: "Sofia"},
	{fname: "Anna", lname: "Towarek", experience: 2, city: "Warsaw"}
	],
	budget: [
{car: 150,
gas: 50
},{
plane: 200,
airport: 30	
},{
hotel: 200,
services: 30	
},{
restaurants: 100,
bars: 50		
}],
	change: {
		Oggi: 154,
		Boro: 189,
		Spas: 32,
		George: 133,
		John: 100,
		Rad: 90,
		Vasil: 10,
		James: 134,
		Paul: 132,
		Ringo: 114,
		Helen: 90,
		Scott: 140,
		Anatoli: 204,
		Maria: 222,
		Hilary: 154,
		Anna: 231,
		Michael: 333,
		Lucy: 233,
		Ana: 222
	}

};

// list all the employees



(function listEmployees(){
	for(let i  = 0;i<Object.keys(finances.change).length;i++){
		employee = document.createElement("div")
		employee.style.width = '80px'
		employee.style.backgroundColor = 'salmon'
		employee.style.border = '2px solid'
		employee.style.margin = '5px'
		employee.style.display = 'inline-block'
		employee.innerHTML = Object.keys(finances.change)[i]
		employees.appendChild(employee) 
	}
}());

// list the amount allowed for business trips:
var budget = document.querySelector(".budget")
function estimate(obj){
	var array = [];
	var mergedArray = [];
	var expenses = 0;
	
	for(let i = 0;i<obj.budget.length;i++){
		array.push(Object.values(obj.budget[i]))
	}	
	for(let i =0;i<array.length;i++){
		for(let j = 0;j<array[i].length;j++){
			mergedArray.push(array[i][j])
		}
	}
	expenses = mergedArray.reduce(function(a,b){
		return a + b;
	})
	budget.innerHTML = "$" + expenses;
	results(obj, expenses)
}


//  - selects each employee through a search function printing all details of him/her
// - name;
// - money spent;
// - percentage of allowence
var worker = document.getElementById('worker')
var search = document.getElementById('search')
var resume = document.getElementById('resume')
var nameEmpl = document.getElementById('name-emp')
var lastName = document.getElementById("last-name")
var moneySpent = document.getElementById("money-spent")
var moneyPercentage = document.getElementById("money-percentage")
var experience = document.getElementById('experience')
let years = document.getElementById('years')
var heroes = []

var list = document.getElementById('list')
console.log()

search.addEventListener('click', function(){
	var result = 0;
	if(list.options[0].text == 'Fname'){
		for(let i = 0;i<Object.keys(finances.change).length; i++){
			if(worker.value == Object.keys(finances.change)[i]){
				nameEmpl.innerHTML = Object.keys(finances.change)[i]
				lastName.innerHTML = finances.employees[i].lname; 
				moneySpent.innerHTML = Object.values(finances.change)[i]
				result = (Object.values(finances.change)[i]*100) / 810;
				moneyPercentage.innerHTML = (100 - result.toFixed(1)) + "%"
				if(result < 70){
					heroes.push(Object.keys(finances.change)[i])
				}
			}	
		}
	}
	if(list.options[1].text == 'Lname'){
		for(let i = 0;i<finances.employees.length;i++){
			if(worker.value == finances.employees[i].lname){
				nameEmpl.innerHTML = finances.employees[i].fname;
				lastName.innerHTML = finances.employees[i].lname;
			}	
		}	
	}

	if(list.options[2].text == 'Experience'){		
		for(let i = 0;i<finances.employees.length;i++){
			if(worker.value == finances.employees[i].experience){

				experience.innerHTML += finances.employees[i].fname + " " + finances.employees[i].lname + " " +  finances.employees[i].city +" "+  worker.value + " of expreience"+ "<br />" ;
			}	
		}	
	}

	if(list.options[3].text == 'Location'){
		var img = document.getElementById("img")
			var city = worker.value
		for(let i =0;i<finances.employees.length;i++){
			if(worker.value == finances.employees[i].city){
				for(let j = 0;j<finances.images.length;j++){

					if(Object.keys(finances.images[j]) == city){
						console.log(Object.values(finances.images[j])[0])
						img.style.backgroundImage = "url(" + Object.values(finances.images[j])[0]  + ")";
						img.style.backgroundSize = "100% 100%"	
					}
					
				}
					
				
				
				console.log(finances.employees[i].fname)
				console.log(finances.employees[i].lname)

				
			}
		}
	}
});


function results(object, expenses){
	
	var objResult = {}
	for(let i=0;i<Object.keys(object.change).length;i++){
	objResult[Object.keys(object.change)[i]] = (expenses - Object.values(object.change)[i] )
	}
	// console.log(objResult)
	promotion(expenses, objResult)
}

function promotion(expenses, obj){
	var bar = 0;
	var temp = (70*expenses)/100
	var bar = expenses-temp;
	// console.log(bar)
	// console.log(obj)
}


estimate(finances)









// $.ajax("https://raw.githubusercontent.com/OggiDanailov/json/master/finances.json").then(function(response){
// 	var a = JSON.parse(response)
// 	console.log(a.budget[0])
// })






































