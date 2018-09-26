


// Objects:
// literal notation of objects

// var person = {
// 	name: 'Oggi',
// 	nationality: 'bulgarian',
// 	country: 'USA'
// }


// object constructor

// function Person(name, nationality, yearBirth){
// 	this.name = name; 
// 	this.nationality = nationality;
// 	this.yearBirth = yearBirth
// }

// var bulgarian = new Person('Ivan', 'bulgarian', 1978);
// var serbian = new Person('Uros', 'serbian', 1980)

// // prototype inheritance

// Person.prototype.age = function(){
// 	return 2017 - this.yearBirth
// }

// // object extends
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

// var newBike = new Bike(2, 'sivler')

// var newCar = new Car(4, 'green')

// More examples:

function Person(first, last, age){
	this.first = first;
	this.last = last;
	this.age = age;
}

var p1 = new Person("Oggi", "Danailov", 32)

p1.constructor 
// (will give you the prototype object)
p1.constructor.name 
// (will give you the name)

Person.prototype.fullName = function(){
	return this.first + " " + this.last
}


function Student(first, last, age, major){
	Person.call(this, first, last, age)

	this.major = major;
}


// This looks similar to the Person constructor in many ways, but there is something strange here that we've not seen before — the call() function. This function basically allows you to call a function defined somewhere else, but in the current context. The first parameter specifies the value of this that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

// We want the Teacher() constructor to take the same parameters as the Person() constructor it is inheriting from, so we specify them all as parameters in the call() invocation.

// Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.


// class concept in ECMA6

// class Bike {
// 	constructor(wheels, color){
// 		this.wheels = wheels;
// 		this.color = color;
// 	}
// 	beep(){
// 		console.log('beeeeeep')
// 	}
// }


// class extends

// class Instrument{
// 	constructor(name, type){
// 		this.name = name;
// 		this.type = type;
// 	}
// }

// class Piano extends Instrument{

// }
// var p = new Piano('wahlstein', 'string')

//So if we’re making a constructor of our own, then we must call super,
 // because otherwise the object with this reference to it won’t be created. 
 // And we’ll get an error.


 // class Tv{
 // 	constructor(name, year){
 // 		this.name = name;
 // 		this.year = year;
 // 	}
 // 	sounding(){
 // 		console.log('beeeeeeep')
 // 	}

 // }

 // class Radio extends Tv{
 // 	constructor(name, year, waves){
 // 		super(name, year)
 // 		this.waves = waves
 // 	}

 // }



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


var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var multi = document.getElementById('multi')
var subtract = document.getElementById('subtract')



class Calculator{
	constructor(){
		var i1 = document.getElementById('i1')
		var i2 = document.getElementById('i2')
		var result = document.getElementById('result')
		this.adding = function(){	
			result.innerHTML = parseInt(i1.value) + parseInt(i2.value)
		}
		this.subtracting = function(){
			result.innerHTML = parseInt(i1.value) - parseInt(i2.value)
		}
		this.multiplying = function(){
			result.innerHTML = parseInt(i1.value) * parseInt(i2.value)
		}

		this.dividing = function(){
			result.innerHTML = parseInt(i1.value) * parseInt(i2.value)
		}
	}

}

var calc = new Calculator()
plus.addEventListener('click', calc.adding)
minus.addEventListener('click', calc.subtracting)





