// Objects:
// literal notation of objects

// var person = {
// 	name: 'Oggi',
// 	nationality: 'bulgarian',
// 	country: 'USA'
// }


// object constructor

function Person(name, nationality, yearBirth){
	this.name = name;
	this.nationality = nationality;
	this.yearBirth = yearBirth
}

var bulgarian = new Person('Ivan', 'bulgarian', 1978);
var serbian = new Person('Uros', 'serbian', 1980)

// prototype inheritance

Person.prototype.age = function(){
	return 2017 - this.yearBirth
}

// object extends
function Bike(wheels, color){
this.wheels = wheels;
this.color = color
}

function Car(){
Bike.apply(this, arguments)
}

//The apply() method calls a function with a given this value, 
// and arguments provided as an array

// The call() method calls a function with a given this value
 // and arguments provided individually. I will get an array

var newBike = new Bike(2, 'sivler')

var newCar = new Car(4, 'green')



// class concept in ECMA6

// class Bike {
// 	constructor(wheels, color){
// 		this.wheels = wheels;
// 		this.color = color;
// 	}
// }


// class extends

class Instrument{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
}

class Piano extends Instrument{

}

var p = new Instrument('wahlstein', 'string')

// real example of Calculator

// function Calculator(x,y){
// 	this.adding = function(){
// 		return x + y
// 	}
// 	this.subtracting = function(){
// 		return x-y
// 	}
// 	this.multiplying = function(){
// 		return x*y
// 	}
// 	this.dividing = function(){
// 		return x/y
// 	}
// }


class Calculator{
	constructor(x, y){
		this.adding = function(){
			return x + y
		}
		this.subtracting = function(){
			return x-y
		}
	}
	
}

var a = new Calculator(12,3)



