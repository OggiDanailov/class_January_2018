// constructor function

// function Car (brand, country) {
// 	this.brand = brand;
// 	this.country = country;
// }

// var c = new Car("toyota", 'japan')


// object extension (apply, call)
// Call and Apply. call and apply are very similar—they invoke a function with a specified
// this context, and optional arguments. The only difference between call
//  and apply is that call requires the arguments to be passed in one-by-one,
//   and apply takes the arguments as an array

// function Bike (brand, gears) {
// 	Car.apply(this, arguments)
// 	this.gears = gears;
// }

// var b = new Bike("giant", true)

// prototype

// var bb = new Bike("amadeus", true)
// var bbb = new Bike("wolfgang", true)


// Bike.prototype.description = function () {
// 	console.log("the brand of this bike is " + this.brand + " and it has gears " + this.gears)
// }

// constructor - this is a special method of creating an object
// .__proto__ method gives you the origin of the object - what inherits this object from



//3.  Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods typical to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
//  Make sure to test afterwards and that your code creates instances of these objects to make sure that what
//   you've written works well and you're able to store the necessary data in each object.


// function Person(firstName, lastName, location){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.location = location;
// 	this.fullName = function(){
// 		return this.firstName + " " + this.lastName
// 	}
// }

// function Teacher(firstName, lastName, location, subject){
// 	Person.apply(this, arguments)
// 	this.subject = subject;
// }


// function Student(firstName, lastName, location, grade){
// 	Person.apply(this, arguments);
// 	this.grade = grade
// }




// function School(){
// 	this.teacherList = [];
// 	this.studentList = [];

// 	this.addTeachers = function(name){
// 		this.teacherList.push(name)
// 	}

// 	this.addStudents = function(name){
// 		this.studentList.push(name)
// 	}

// 	this.listTeachers = function(){
// 		for(let i=0;i<this.teacherList.length;i++){
// 			console.log(this.teacherList[i])
// 		}
// 	}

// 	this.listStudents = function(){
// 		for(let i = 0;i<this.studentList.length;i++){
// 			console.log(this.studentList[i])
// 		}
// 	}
// }
// var t1 = new Teacher("Chris", "Foster", "Philadelphia", "Literature")
// var t2 = new Teacher("Bj", "Cantelupe", "San Diego", "Music")

// var s1 = new Student("Steve", "Ng", "NYC", 6)
// var s2 = new Student("Adam", "Klein", "Philadelphia", 6)

// var school1 = new School();

// school1.addTeachers(t2)
// school1.addStudents(s1)
// school1.addStudents(s2)

// school1.listStudents()


// Homework:

// Create a music box. The design is completely up to you;
// The app should be able to:
//  - play audio files;
//  - pause audio files;
//  - has next/previous buttons;
//  - has randomization (when selected it randomizes the song order);
//  - able to load audio files;
// Please make sure that the app looks as good as possible in terms of design. This is your protfolio
// and all aspects of the app (not only the js logic) is very important;
// Start the project gradually - first figure out how to work with audio in javascript. Once you get the play and 
// pause buttons proceed with the rest; Leave the design and css until the end.

