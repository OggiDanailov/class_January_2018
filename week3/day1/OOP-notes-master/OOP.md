Object Oriented JS

In this lecture I will talk about what is an object, what is a object-oriented programming, what is objet inheritance and finally classes from ES6

Object oriented programming this is an approch in programming (and this is not only JS) where you wrap your functionality in Objects. The advantage of this approach is that it allows you to: - you don't have to duplicate your code; - the different stagese or attributes in your code will be separated; - creating snippets of code wrapped in an object will allow you to reuse easily this code. - your code is much more clear

Javascript is prototype-based language. It means that in Javascript you make prototype objects, and then make new instances based on this prototype objects. Everrything in JS revolves around the Object. That's the reason why in JS everything is an object apart from primitive data type: - string - number - boolean - null - it is an assignment value; can be assigned to a variable - undefined - variable has been created but nothing has been assigned; it represents no value

Object in JS: there is a literal object; collection of key-value pairs

var person = { nationality: 'serbian', name: 'Uros', birthYear: 1980 } also, there is a square bracket notation like: person['nationality']

This way of creating objects is used mostly for storing data. It is not the best way of creating objects in JS.

object constructor: the object constructor creates an object - the prototype object. It allows you to create instances of this object (the prototype) - it looks exactly like a regular function (and it is a regular function); it is convention to capitalize the name of the funciton. This is indicator that you have constructor function, not regular function. - the syntax - first we can pass parameters; for the first time we use the key word 'this' - probably the most powerful key word in JS. The value of 'this' is related to the scope where the word is used. When we use this word within an object it refers to the object itself; in a function it refers to the object that the function is part of; - The this keyword in an object constructor does not have a value. It is only a substitute for the new object.

The value of this will become the new object when the constructor is used to create an object.
Prototype = we can apply additional method or property to the prototype object which will become available to all instances to this object;
