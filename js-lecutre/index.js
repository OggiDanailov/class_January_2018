// 1. window object is a global object.
// when we call window.a in the browser you will get the same result as you were calling a.
// 'this' keyword refers to the global object in our case.
// you can write window.a
// or this.a or this.b();
// var a = "whatever";
// function b(){
// 	console.log('asdfasdfa')
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2. Hoisting -

	// https://scotch.io/tutorials/understanding-hoisting-in-javascript

Hoisting is a JavaScript mechanism where variables and
 function declarations are moved to the top of their scope before code execution. 

JS executes in two different phases:
- first JS stores all the variables in something like Memory Space
- executing phase when JS executes the code.

// All variables be default are set to undefined. When we run the code the var a gets stored 
// to the Memory Space but without its value;instead, it is set to be undefined. 
// when we execute the code during the second phase JS doesn't know what the value of a is.
// Aviod Hosting overall!!



//  Hoisting - here a will be undefined; b will execute; if we remove var a then we will get 
//  an error;

// b()

// var a = 'whatever';
// console.log(a)

// function b(){
// 	console.log('This is BBB')
// }


// Constructor function vs. Class

// var person1 = new Person('Oggi', 32)

// function Person(name, age){
//   this.name = name;
//   this.age = age
// }

// console.log(person1.age)



// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = age
//   }
// }

// var person2 = new Person("oggi", 43)

// console.log(person2.name)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

3. undefined !== not defined
Every variable receives undefined value on the first phase of JS execution. 
Therefore, regardless of what value a given var has, in the beginning they are all
undefined as far as they are declared in the js file.

var a;
console.log(a)

console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';


this interprets by JS like:
var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';


// 4. Function invocation
// First, JS will console.log(w) as 1;then it will invoke a(); a() will console.log 2 and then
// it will invoke b(); b will console.log undefined;finally, will console.log 'this is the last'


// function b(){
// var w;
// console.log(w)
// }

// function a(){
// 	var w = 2;
// 	console.log(w)
// 	b()
// }

// var w = 1;
// console.log(w)
// a();
// console.log('this is the last ' + w)



// Global object is an object that it is not in a function;
// there is this that refers to this object; in the case of the browser 'this' refers to the Glboal object
// When we create functions or variables they get attached to the Global object.


// single threaded-synchronous execution of JS:
// y
// sss
// whatever
// will be the order here

// function a(){
// 	b()
// 	console.log('sss')
// }

// function b(){
// 	console.log('y')
// }

// a()
// console.log("whatever")

// Asynchronous - more than one at the time; 
// there is an event queue where functions to be executed get stored


"this" scope problem in JS:

var obj = {
	id: 333,
	fullName: " ",
	setName: function(firstName, lastName){
		this.fullName = firstName + lastName;
	}
}

function input(first,last, callback){
	callback(first, last)
}

// If we pass for the callback obj.setName, we won't pass the first and last to the 
// scope of the object. If we console.log(obj.fullName) it will be still empty;
// If we console.log(window.fullName) we will see that we attached it to the Global object

In order to fix this problem we  have to pass obj scope somehow. So we can use apply:
function input(first, last, callback, objScope){
	callback.apply(objScope, [first, last])
}

input("Dorian", "Grey", obj.setName, obj)














