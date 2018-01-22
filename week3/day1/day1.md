COding challenge;
write a function that takes an array as an argument and gives you the sum of this array ([1,2,3] -> 6)

var sum;  
for(i=0;i< 1000;i++){  
	if(i% 2 === 0  || i % 4 === 0){  
		sum += i;  
	}   
}console.log(sum)  

////////////////////
var a = [1,2,3,4]  

var sum = a.reduce(function(a, b){  
	return a + b;  
}, 0)  

##Review:
 - varabiles - var, const and let
 - string;  
 - number;  
 - boolean;  
 - Undefined;  
 - null;

 Operators
 - modulo probably the most important;
 - functions
 (talk about a callback function); var a = function;
- if/else statements;
(switch statements in JS)
- arrays;  
- for loops;
- object literal;
 

- hoisting

##OOP

- Object Oriented Progreamming: programming model or approach that has been organized around objects rather than procedual programming actions. So far, we have been executing lines of code that does not have some specific order or organization. In OOP you build your code in chunks of objects. Both functions and data are wrapped in an object that becomes reusable, easy to find (during debugging) and gives you the flexibility to pass its properties to another objects (call and apply) or easiy add functionality to the prototypical object (inheritance). 
 
- OOP vs Procedual programming: One of the principal advantages of object-oriented programming techniques over procedural programming techniques is that they enable programmers to create modules that do not need to be changed when a new type of object is added. A programmer can simply create a new object that inherits many of its features from existing objects. This makes object-oriented programs easier to modify.

- A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.
- Javascript is prototype-based language. It means that in Javascript you make prototype objects, and then make new instances based on this prototype objects. 
- Built-in JS constructors:

var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object 

##Constructor Function
object constructor: the object constructor creates an object - the prototype object. It allows you to create instances of this object (the prototype) - it looks exactly like a regular function (and it is a regular function); it is convention to capitalize the name of the funciton. This is indicator that you have constructor function, not regular function. - the syntax - first we can pass parameters; 
###this keyword
The value of 'this' is related to the scope where the word is used. When we use this word within an object it refers to the object itself; in a function it refers to the object that the function is part of; - The this keyword in an object constructor does not have a value. It is only a substitute for the new object.

The value of this will become the new object when the constructor is used to create an object.

1. example of function constructor;
2. 3 examples of Person; you create instances of object person and you inherit all the functionality that this object contains. 
If you try to do the same with object literal you won't be able to; JS won't allow you to create a new object based on object literal;
###Exercise 1
•   Create a new JavaScript file with a constructor function for an object of your choosing
•  Include at least one method in it(function)
•   Instantiate two copies of that object without getting syntax errors

3. Prototype - how we can add another functionality to the prototype object; because the other instances of this object have been created as bluepirnts from this particular one they will inherit this new functionality as well. This is call inheritance 

4. New example of extending the functionality of one object to another 

###Exercise 2
•   Take the object you created in the last exercise and extend it using its prototype
•   Add one more attribute and one more method to it•   Try to access these attributes and methods on both an already created instance and a brand new instance of the object

5. Class in Javascript - this is simply a new way of writing the same. This is ECMA6 so it is relatively new. Reactjs is all written in classes.
6. Examples -
7. Extends - extends keyword

###Exercise 3
- Take an constructor function that you have already used and create it as a class (it will have the same functionality but different syntax)
- extend its functionality to another class that you create (similar of what you already did in exercise 2



//call method in JS
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.call(myObject);  // Will return "Mary Doe"