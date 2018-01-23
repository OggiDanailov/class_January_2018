
// Class
// Create a class called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should accept and argument and set currentValue equal to itself times the input, then return 
// currentValue.getCurrentValue should return the last answer returned from multiply.

// Object Constructor
// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever 
// the current value is times the number supplied.getCurrentValue should return the 
// last answer returned from multiply.


// function Multiplier(){
// 	this.currentValue = 1;
// 	this.multiply = function(x){
// 		this.currentValue = x * this.currentValue
// 	}
// 	this.getCurrentValue = function(){
// 		return this.currentValue
// 	}
// }

// class Multiplier{
// 	this.currentValue = 1;
// 	multiply(x){
// 		this.currentValue = x * this.currentValue;
// 	}
// 	getCurrentValue(){
// 		return this.currentValue
// 	}
// }

// Class
// Create a Photo class and an Album class. The Photo class will have two instance variables, 
// name and location. The Album class will have one instance variable, photos, 
// set to an empty array. It will also have two methods: 
// 1. add() which adds a Photo to the end of the photos array 
// 2. remove() which removes a photo from the end of the array.

// Object constructor
// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many 
// Photo objects in its photos attribute. Each Album should allow you to add a new photo
// and list all photos. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.


function Photo(name, location){
	this.name = name;
	this.location = location
}


function Album(){
	this.photos = []
	this.add = function(photo){
		this.photos.push(photo)
	}
	this.list = function(){
		for(let i=0;i<this.photos.length;i++){
			console.log(this.photos[i])
		}
	}
	this.remove = function(photo){
		this.photos.pop()
	}
}

var miami = new Photo('miami beach', 'miami')
var boston = new Photo('boston street', 'boston')

var myAlbum = new Album()
myAlbum.add(boston)
myAlbum.add(miami)



// Class
// Create a Person class with one instance variable, name. From this object, extend a Teacher class 
// and a Student class. A student has one instance variable: grade. A Teacher has two instance variables:
//  1. an array of students 
//  2. a subject. A teacher has a method changeGrade() that can change the grade of a student.



// Object Constructor
// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects to make sure that what 
// you've written works well and you're able to store the necessary data in each object. 
// Potential methods: A teacher can change the grades of a student, give detention to a student,
//  or send a student to the principal. A student can do her or his homework, skip class, 
//  or give the teacher an apple. The school could open or close. 


class Person{
	constructor(name){
		this.name = name;
	}
}

class Student extends Person{
	constructor(name, grade){
		super(name)
		this.grade = grade;

	}
}

class Teacher extends Person{
	constructor(name, subject){
		super(name)
		this.students = [];
		this.subject = subject
	}
	changeGrade(student, grade){
		return student.grade = grade
	}

	addStudents(student){
		this.students.push(student)
	}
}



















