// 1. Coding challenge - object;
// 2. Engel question
// 3. Lecture
// 4. Lecture - exercise
// 5. Finding highest number
// 6. Comparing two arrays

// constructor function

function Person (fname, lname, gender) {
	this.fname = fname;
	this.lname= lname;
	this.gender = gender;

	this.greeting = function () {
		if(this.gender === 'male') {
			return "hello mr. " + this.fname + " " + this.lname
		} else {
			return "hello ms. " + this.fname + " " + this.lname
		}
	}
} 

function Developer (fname, lname, gender, specialty) {
	Person.apply(this, arguments)
		this.specialty = specialty;

		this.description = function () {
			console.log(this.greeting() + " , " + "you awesome " + this.specialty + " developer")
		}
}


// class in javascript
// JavaScript classes, introduced in ECMAScript 2015,
//  are primarily syntactical sugar over JavaScript's existing
//   prototype-based inheritance. The class syntax does not introduce
//    a new object-oriented inheritance model to JavaScript.

// constructor() function within class - this is a special function that it is 
// called first in every initialization of an Object; there is only one constrctor()

class Person {
	constructor(fname, lname, gender) {
		this.fname = fname;
		this.lname = lname;
		this.gender =  gender;
	}

	greeting() {
		if(this.gender === 'male') {
			return "hello mr. " + this.fname + " " + this.lname
		} else {
			return "hello ms. " + this.fname + " " + this.lname
		}
	}
}

// here with the key word extends we can inherit the functionality of Person
class Developer extends Person {

}

// if we want to apply our own functionality we need to initialize a new constructor function
class Developer extends Person {
	constructor(fname, lname, gender, specialty) {
		super(fname, lname, gender)
		this.specialty = specialty;
	}
	description () {
		console.log(this.greeting() + " , " + "you awesome " + this.specialty + " developer")
	}
}

// 1. create an object Animal using constructor function; introduce at least one
// method (function) that returns some values dynamically; extend this Animal to another
// object (Animal on your choice - bear, lion, cat etc.); introduce some new properties for the new object;
// 2. rewrite all of these using class syntax






