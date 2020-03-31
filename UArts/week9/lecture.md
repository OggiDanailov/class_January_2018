- Object Oriented Progreamming: programming model or approach that has been organized around objects rather than procedual programming actions. So far, we have been executing lines of code that does not have some specific order or organization. In OOP you build your code in chunks of objects. Both functions and data are wrapped in an object that becomes reusable, easy to find (during debugging) and gives you the flexibility to pass its properties to another objects (call and apply) or easiy add functionality to the prototypical object (inheritance). 
Object oriented programming this is an approch in programming (and this is not only JS) where you wrap your functionality in Objects. The advantage of this approach is that it allows you to: - you don't have to duplicate your code; - the different stagese or attributes in your code will be separated; - creating snippets of code wrapped in an object will allow you to reuse easily this code. - your code is much more clear
 
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

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

Here we are going to use person1 that has been already created to create another instance of the same object through the constructor keyword; we will use this method if we don't have access to the main prototype Object.

The constructor property has other uses. For example, if you have an object instance and you want to return the name of the constructor it is an instance of, you can use the following:

p1.constructor.name - it will give you the name of the prototype object - Person

1. example of function constructor;
2. 3 examples of Person; you create instances of object person and you inherit all the functionality that this object contains. 
If you try to do the same with object literal you won't be able to; JS won't allow you to create a new object based on object literal;