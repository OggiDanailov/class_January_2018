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

4. clear fix in 

// 5. Promises - Promises provide a simpler alternative for executing, 
// composing, and managing asynchronous operations when compared to 
// traditional callback-based approaches. Promises are actually JS objects and they have  states:
// pending, fulfilled and rejected. They represent the eventual completion or failure of 
// of an asynchronous operation. 

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
//  compilation step in code execution.Execution context is the environment where the js code is 
//  executed. First it creates Global execution context - this is global object with all functionality
//  that it is available for use (built-in methods); then sets the keyword 'this' and it will refer
//  to the global object. Functional execution context is created each time when function is involved;

8. callback function





