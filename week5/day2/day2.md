Ruby Objects

- Everything in Ruby is an object. Just like in Javascript, everything in Ruby is an object.
In Javascript we were creating new objects in two different way:
- First through the Constructor Function (ex1.)
In the example there we will create an object called Car and with the key word 'new' we will create as many instances of Car Object as we want to. This is the original method of creating objects in JS - that's why we say that JS is a  Prototype-based object oriented language (or classless);
- Second method was introduced with the last ECMA6 edition of JS and introduced the key word 'class' - although class now exists in JS this is just a new syntax, not a new concept or behavior in JS. (ex2.)

- interesting comparison between JS and Ruby classes
http://andrewblum.org/javascript/2015/10/23/Javascript.html


The second syntax is much closer to how you create objects in Ruby.
Ruby is a class-based programming language. We use classes in order to create objects. Class is used to create the blueprint of an object and then we can create many instances of this object with the 'new' keyword.
You can think of classes as basic outlines of what an object should be made of and what it should be able to do. 
When defining a class, we typically focus on two things: states and behaviors.  
####ex.3   
we declare the class (in our case Animal) and we capitalize it. Then comes the initialize method. In our example, instantiating a new Animal object triggered the initialize method and resulted in the string being outputted. We refer to the initialize method as a constructor, because it gets triggered whenever we create a new object. It is the same concept as the constructor method in JS class.
The initialize method gets called every time a new instance of the object is instantiated.

Each new instance of the object that we created has an unique ID number. We already talked about the id's yesterday.

- Instance variables - instance variables starts always with '@' in RUby. It is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects.
Instance variables are bound to a specific instance of a class. By binding itself to the entire object, an instance variable makes itself available to every method of the object.
- When in JS we create object constructor with some values we always tie them with the word 'this' - which refers to the instance of the new object that we are going to create. 
- We do a very similar thing with the @ symbol or instance variable in RUby.

####ex. 4

In example 4 we have: a new object Animal insitgated through a class. the class has two passing arugments - name and color. It is the same way of passing arguments for every new instance of an object in Javascript. 
We use instance variables though - now @name and @color are available throughout the class Animal and accessible to each new instance of the object Animal.
The variable age has a local scope - it will be available only in the block so it is not accessable from outside the block; 
If we remove the @ sybmols from the exmple you will see how Ruby won't recognize  color in say_color method.
say_color is a method within the Object and it is available to each new instance of a new object (simple function - just as it is in JS)

----------------------------------------
Exercise1 in class
Create a very basic object that models a Robot. It should have an instance method to compute and a class method called destroy_humanity  
- Try instantiating a new instance of the object and calling    
- methods on your instance 

----------------------------------------
Atributes in Ruby Objects

in ex4. if we want to access @name in a new object instance we have to create a special method.  
ex.5   
in the JS example, we can create a new instance of the object and call it easily. We can change the age of the new instance without a problem.

We can't really call in Ruby oggi.age - this will raise an error. We can get the age through creating a new method that returns this value
This is a getter method; if we want to change it, however, we need a setter method.
Lets look at example 6.  
ex. 6    
There we have first get_age which is a getter method (we are getting the info of age in every new instance of object that we instigate) and then it follows the setter method def set_age=(age). this is a special Ruby syntax that allows us to change the value of @age. If we look at the example ex. 6 we will see how first we will print 44 then we will pass 32 and the second time when we do oggi.get_age we will print the new value that we just passed - 32.  
 
----------------------------------------
Exercise2 in class
Create a getter and setter method for the object you made in the last exercise.
Try using it by requiring your object in IRB:
require './my_ruby_file'
- make sure that you can get and set different values  

----------------------------------------

Getter/Setter: Built in methods

- attr_reader  
Now since this is a very common pattern that we will do over and over in Ruby, there is a built-in method that makes all of this much easier. This is 'read' and 'wrtie' methods on an object attributes.

ex. 7  
Here, I give permissions to instance varialbe @name to be called when I create the new object instance - bulgarian.name = returns my name; however, if I call bulgarian.age I will get an error since I have not included :age in the attr_reader

- attr_writer    
ex. 8    
The same cocept exists for writing. In example 8 I set attr_writer to appy to name as well. When we print the first time the name of the new object serbian (it is allowed to read it through attr_reader) we get "Uros", then we set it to 'Goran' and finally we print it updated - 'Goran'.  
attr_accessor
Since these two methods are very common and usually we use both of them toghether there is a shortcut in Ruby that puts unites both methods:
attr_accessor
in example 9 we write what we already did in the previous examples:
ex. 9  
In example 9 we give access to both :name and :age, we instigate the new instance of an obhect called french, give the name 'Henry' and age 44 and then we change it to 'Dorian' and age of 11.

----------------------------------------
Exercise3 in class
•   Create a new Ruby class  that sets at least 
3 attributes on an object
•   The object should have setters and getters to allow these 
attributes to be modified later on
•   Your script should also include examples of instantiating the 
object, setting attributes, reading attributes and resetting them

----------------------------------------

Object inheritance in Ruby

Object inheritance in Ruby is very similar how it works in JS. One class can inherit from another class which means that all the functionality of one class gets transferred to the other class.
ex. 10
class Man inherits from Animal; Man now have access to legs. since in the class Animal attr_accessor is given to legs (meaning you can get and set its value), the new instance of the Man object has an access to legs; first I assign 2 and then I have access to it.

- Super
When you invoke super with arguments, Ruby sends a message to the parent of the current object, asking it to invoke a method of the same name as the method invoking super. super sends exactly those arguments. - ex. 11


ex. 12 also example with super key word.
First we create a class Mammal and then a Cat which inherits from Mammal.
we create one method in Mammal - roar. the new instance - mu can inherit roar and will print 'wooooow'.
We can create a new method called roar to Cat. Now it will call 'mewouw'. If we include the key word 'super', however, we will print both 'wooow' and 'mewowew'
 Super invokes the parent class behavior of method roar and adds it to Cat's own method behavior.


----------------------------------------
###Exercise4 in class
•   Create an "object zoo". Create a class that models a Zoo which has at least one attribute called exhibits. Inside of this attribute is an array of object instances extended from an Animal class that have their own unique traits depending on which animal they are.
•   Create unique methods on all of your objects depending on what 
kind of animal they are supposed to emulate (roar for a Lion object, fly for Eagle object, etc). You could use super and even have a method on Animal that is customized per specific animal objects.

----------------------------------------

Keywords:

.methods
you can attach it to a given data type (string, array, hash etc.) and see all the methods available.
ex. 13 - (here it is good example of why would you use print instead of puts - the list is so long that if you want to see them in bulk you should print them without breaklines.)
 - gsub - general subsitution - ex. 14
 - map - ex. 15  - the same as map function in javascript 
 - zip method on array ex. 16

  explore on your own
 arrays - 
 - delete_if
 - shift,
 - join,
 - reverse

- methods on hashes:  

ex. 17  

- fetch - Returns a value from the hash for the given key.
- store - it stores a certian key value pair in a hash


 - each on hash - first argument is the keys, second argument is the value
 - keys on hash - returns the keys
 - values on hash - returns the values

























