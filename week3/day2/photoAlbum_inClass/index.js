//2. Implement an object model that allows you to store strings that represent a Photo. 
// // Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.
//  Each Photo should store the photo's file name and the location the photo was 
// taken in as strings. Create instances of each object defined to prove that your object model works.

// function Photo(name, location){
// 	this.name = name;
// 	this.location = location;
// }


// function Album(){
// 	this.photoList = [];

// 	this.add = function(photo){
// 		this.photoList.push(photo)
// 	}

// 	this.list = function(){
// 		for(let i = 0;i<this.photoList.length;i++){
// 			console.log(this.photoList[i])
// 		}
// 	}
// 	this.access = function(){
// 		console.log(this.photoList[this.photoList.length-1])
// 	}
// }


// var a1 = new Album();
// var p1 = new Photo('smiley photo', 'Toronto')
// var p2 = new Photo('scary photo', 'Detroit')

// a1.add(p1)
// a1.add(p2)
// console.log(a1.list())


//3.  Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
//  Make sure to write code afterwards that creates instances of these objects to make sure that what
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

// 'console.log(school1.listStudents())

// CreateElement()'

var wrapper = document.createElement("div")
wrapper.style.width = "90%"
wrapper.style.height = "300px"
wrapper.style.margin = "0 auto"
wrapper.style.border = "2px solid red"
document.body.appendChild(wrapper)

// 2.1/2 Extra Challenge: If you have time and are looking for an extra challenge try
//  using your solution to problem 2 to create a simple one page photo gallery.
//   This page should display  all photos stored in your photo gallery object. 
//   Try your best to implement modern design trends and if you are looking 
//   for even more then give a user the option to press a button to
//  animate the images on the page somehow. Have fun!
var photoName = document.getElementById("photoName")
var photoLocation = document.getElementById("photoLocation")
var photoUrl  = document.getElementById("photoUrl")

var nameFunction  = document.getElementById("nameFunction")
var showFunction = document.getElementById("showFunction")

function Photos(name, location, url){
	this.name = name;
	this.location = location;
	this.url = url;
}


function Album(){
	this.photoList = [];

	this.addPhotos = function(){
		var newName = photoName
		newName = new Photos(photoName.value, photoLocation.value, photoUrl.value)
		this.photoList.push(newName)
		console.log(this.photoList)
	}

	this.listPhotos = function(){
		var wrapper = document.createElement("div")
		wrapper.style.width = "90%"
		wrapper.style.border = '2px solid orange'
		wrapper.style.margin = '10px auto'

		document.body.appendChild(wrapper)
		for(let i = 0;i<this.photoList.length;i++){
			var img = document.createElement('div');
			img.style.border = "2px solid "
			img.style.width = "200px"
			img.style.height = "200px";
			img.style.backgroundImage ="url(" +  this.photoList[i].url + ")"
			img.style.backgroundSize = '100% 100%';
			img.style.margin = '10px'
			wrapper.appendChild(img)
		}
	}	
}

var album = new Album();

nameFunction.addEventListener("click", function(){
	album.addPhotos()
})

showFunction.addEventListener('click', function(){
	album.listPhotos()
})

// classes

// function Album(name, location, year){
// 	this.name = name;
// 	this.location = location;
// 	this.year = year;
// 	this.age = function(){
// 		return 2018 - this.year
// 	}
// }

// function Photo(){
// 	Album.apply(this, arguments)
// }

// var a1 = new Album('wedding', 'Bahamas', 2015)
// console.log(a1.age())


// class Album{
// 	constructor(name, location, year){
// 		this.name = name;
// 		this.location = location;
// 		this.year = year;
// 	}
// 	age(){
// 		return 2018 - this.year
// 	}
// }

// class Photo extends Album{
// 	constructor(name, location, year,  pages){
// 		super(name, location, year)
// 		this.pages = pages;
// 		this.color = 'black'		
// 	}
// }

// var p1 = new Photo("wedding", 'Bahamas', 2001,  212)
// console.log(p1.pages)
// console.log(p1.name)
// console.log(p1.location)
// console.log(p1.age())

// Calculator

// var num1 = document.getElementById("num1")
// var num2 = document.getElementById("num2")

// var add = document.getElementById("add")
// var subtract = document.getElementById("subtract")
// var multiply = document.getElementById("multiply")
// var divide = document.getElementById("divide")

// var result = document.getElementById("result")


// class Calculator{
// 	adding(x, y){
// 	result.innerHTML = parseInt(x) + parseInt(y)		
// 	}
// 	subtracting(x, y){
// 	result.innerHTML = parseInt(x.value) - parseInt(y.value)
// 	}
// 	multiplying(x, y){
// 	result.innerHTML = x * y
// 	}
// 	dividing(x, y){
// 	result.innerHTML = x / y		
// 	}
// }
// var calc = new Calculator();

// add.addEventListener('click', function(){
// 	calc.adding(num1.value, num2.value)
// })

// subtract.addEventListener("click", function(){
// 	calc.subtracting(num1, num2)
// })


















