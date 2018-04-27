// Objects in Javascript
// object is a collection of key-value pairs

// there is a literal object notation
// this is usually used to store value; very similar to an array

var Car = {
	name: 'honda',
	model: 'civic',
	year: 1997
}

// bracket notation 
 console.log(Car['wheel'])
//constructor function
// the new keyword actually creates the object

//hoisting
function Bike(price, brand){
	console.log(this)
this.price = price;
this.brand = brand;
this.increasePrice = increasePrice;
}

function increasePrice(x){
	this.price += x;
}

var balkan = new Bike(123, 'balkan')
//that was another way of creating function within an object

function Person(name, birthdayYear){
	this.name = name;
	this.birthdayYear = birthdayYear;
	this.age = function(){
		return 2017 - this.birthdayYear
	}
}

var bulgarian = new Person('boro', 1978)
var serbian = new Person('uros', 1980)

bulgarian.eyeColor = 'green'


Person.prototype.eyeColor = 'brown'
console.log(bulgarian.eyeColor)
console.log(serbian.eyeColor)

function Animal(){
	Person.apply(this, arguments)
}

// apply takes an array as an argument; call will take individual arugments

Animal.prototype = new Person;


var jaguar = new Person('jaguar', 2013)
console.log(jaguar.age())

