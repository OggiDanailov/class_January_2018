// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
//  Make sure to write code afterwards that creates instances of these objects to make sure that what
//   you've written works well and you're able to store the necessary data in each object.

// function Person(firstName, lastName, location){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.location  = location;
// 	this.fullName = function(){
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// function Teacher(firstName, lastName, location, subject){
// 	Person.apply(this, arguments)
// 	this.subject = subject;
// }

// function Student(firstName, lastName, location, grade){
// 	Person.apply(this, arguments)
// 	this.grade = grade;
// }



// function School(){
// 	this.teacherList = [];
// 	this.studentList = [];

// 	this.addStudents = function(name){
// 		this.studentList.push(name)
// 	}
// 	this.addTeachers = function(){
// 		this.teacherList.push(name)
// 	}

// 	this.listStudents = function(){
// 		for(let i = 0;i<this.studentList.length;i++){
// 			console.log(this.studentList[i].fullName())
// 		}
// 	}

// 	this.listTeachers = function(){
// 		for(let i = 0;i<this.teachersList.length;i++){
// 			console.log(this.teachersList[i].fullName())
// 		}
// 	}
// }


// var s1 = new Student("Oggi", "D", "Sofia", 5)
// var s2 = new Student("Boro", "Ivanov", 'Sliven', 4)
// var t1 = new Teacher("Chris", "Foster", "NYC", "History")
// var t2 = new Teacher("Bj", "Cantelupe", "San Diego", "Music")

// var school1 = new School();
// school1.addStudents(s2)
// console.log(school1.listStudents())



// Class Lecutre

class Bike {
	constructor(brand, color, wheels){
		this.brand = brand;
		this.color = color;
		this.wheels = wheels
	}

	beep(){
		return 'beep'
	}
}

var b1 = new Bike("stubborn", 'red', 2)

console.log(b1.beep())
console.log(b1.brand)

class Car extends Bike{
	constructor(brand, color, wheels, country){
		super(brand, color, wheels)
		this.country = country;
	}
}

var c1 = new Car('honda', 'green',4,  "Japan")
console.log(c1.color)
console.log(c1.beep())
console.log(c1.country)

class Whatever{
	constructor(age){
		this.age = age;
	this.name = 'whatever'		
	}
	what(){
		return 'whatever'
	}
}

var w = new Whatever(32);
console.log(w.age)










