// 1. "this" keyword in Javascript - "this" refers to an object. The object that “this” refers
 // changes every time execution context is changed.

// 2. strict mode - it is way of writing more secure javascript; 
// For example,
// "use strict"
// x = 4;
// will throw an error since x has not been defined
// If strict mode is enabled for any function then the value of “this” will be
//  “undefined” as in strict mode, global object refers to undefined in place of
//   windows object.

// 3. closures
// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
//  - they give you access to local variables that are not available in the global
// context. Closures kind of save the local variables in its scope; The closure is a collection of
//  all the variables in scope at the time of creation of the function. Many object-oriented languages
 // provide the ability to declare methods as either public or private.
 //  JavaScript doesn’t have this functionality built in, but it does allow
 //   to emulate this functionality through the use of closures, which is
 //    known as the module pattern.
// function name(fname){
// 	return function(lname){
// 		return fname + " " + lname;
// 	}	
// }

// var a = name("Oggi")
// a("Danailov")
// ~> "Oggi Danailov"

// Save example:

// function something(){
// 	var salary = 5000;
// 	function increaseSalary(number){
// 		return salary + number;
// 	}
// 	return increaseSalary
// }
// var a = something()
// a(2222)
// ~> 7222



// 5. Promises - Promises provide a simpler alternative for executing, 
// composing, and managing asynchronous operations when compared to 
// // traditional callback-based approaches.
// A promise is an object that wraps an asynchronous operation and notifies when it’s done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result is available and “catch(…)” for when something went wrong.
 Promises are actually JS 
// objects and they have  states: pending, fulfilled and rejected.
 // They represent the eventual completion or failure of 
  // an asynchronous operation. 
  // promises are great alternative to fix the so called callback hell - 
  // when you have callback functions within callback functions
var p = new Promise(function(resolve, reject){
	var a = 10;
	if(a > 0){
		resolve("a is positive number")
	} else{
		reject("a is negative number")
	}
})

p.then(function(value){
	console.log(value)
}).catch(function(value){
	console.log(value)
})


// var a = function(num){
// 	return new Promise(function(resolve, reject){
// 		if(num < 10){
// 			resolve(true)
// 		}else{
// 			reject(false)
// 		}
// 	})
// }

// a(19).then(function(value){
// 	console.log(value)
// }).catch(function(value){
// 	console.log(value)
// })

// ------------------------------------------------------------
var array = [];

var red = function(){
	new Promise(function(resolve, reject){
		resolve('red')
	})
}

var green = function(){
	new Promise(function(resolve, reject){
		resolve('green')
	})
}

var blue = function(){
	new Promise(function(resolve, reject){
		resolve('blue')
	})
}

red().then(function(value){
	array.push(value);
	return green()
}).then(function(value){
	array.push(value)
	return blue()
}).then(function(value){
	array.push(value)
})

console.log(array)


// 6. Hoisting; hoisting issues
// The process of your function and variable declarations being added to memory during
//  the compile phase.
// console.log(a);
// var a = 3;
// // undefined
// here a is hoisted (the declaration of a) during the compile period; that's why it is undefined
// it exists but without value since the value has been declared later;
// issues:
// Because of hoisting, it’s considered a best practice to always declare your 
// variables at the top of their respective scopes.



// 7. Execution context and JS Interpreter
// Javascript is a scripting language which means that there is no
//  compilation step in code execution.Execution context is 
// the environment where the js code is executed. First it 
// creates Global execution context - this is global object with
//  all functionality that it is available for use (built-in methods);
//   then sets the keyword 'this' and it will refer to the global object.
//    Functional execution context is created each time when function
//     is involved;
// - Javascript Engine:
// 	it contains of Memory heap and Call stack;
// 	The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. 
 // a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
// 	Heap is a much larger region storing everything allocated dynamically.


 - Event Loop-
 The event loop is the term given to the process of the waiting for the queue to receive a message synchronously. The increment that the event loop moves in is called a ‘tick’, and every time it ‘ticks’ it checks if the call stack is empty, if so , it adds the top function in the event queue to the call stack and executes it. Once it is finished processing this function it starts ticking again. This diagram is simple and great.


 - Callback queue



// 8. callback function
// // A callback function, also known as a higher-order function, is a      function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. 
// Not every callback function has asynchronous behavior; for example, forEach() does take a callback but it is not asynchronous behavior.
// Hooking to any asynchronous event in Javascript always requires a callback but that doesn't mean calling functions or passing them around is always asynchronous.


// 9. What is an API Endpoint?
// Simply put, an endpoint is one end of a communication channel.
//  When an API interacts with another system, the touchpoints
//   of this communication are considered endpoints. 
//   For APIs, an endpoint can include a URL of a server or service.
//    Each endpoint is the location from which APIs can access the
// resources they need to carry out their function. APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.
// Why Are API Endpoints Important?
// All over the world, companies leverage APIs to transfer vital information, processes, transactions, and more. API usage will only increase as time goes on, and making sure that each touchpoint in API communication is intact is vital to the success of each API. Endpoints specify where resources can be accessed by APIs and play a key role in guaranteeing the correct functioning of the software that interacts with it.  In short, API performance relies on its ability to communicate effectively with API Endpoints.
// Do I Need to Monitor API Endpoints?
// YES. Understanding how each API is performing can drastically change the way you’re able to capture the value APIs add to your business. Proactively Monitoring APIs can ensure that you’re able to find issues before real users experience them.


// Scalable application
// Creating applications that are both resilient and scalable is an essential part of any application architecture. A well-designed application should be able to scale seamlessly as demand increases and decreases, and be resilient enough to withstand the loss of one or more compute resources.




