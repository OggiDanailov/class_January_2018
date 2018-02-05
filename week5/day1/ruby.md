###Ruby
 - how to run a ruby file;
 - rb. file and irb; require './myfile'

###Ruby vs JavaScript

- Variables:
- name vs. var name

- Floats(Float), Integers(Fixnum);
2.3.class and 3.class will give you the class of the object
- Strings
- Symbol:

 A Symbol is the most basic Ruby object you can create. It's just a name and an internal ID. Symbols are useful because a given symbol name refers to the same object throughout a Ruby program. Symbols are more efficient than strings. Two strings with the same contents are two different objects, but for any given name there is only one Symbol object. This can save both time and memory. 
 SYMBOLS are IMMUTABLE!!
 puts 'hello' + ' ' + 'world'
 puts :hello + " " + :world 
Therefore, when do we use a string versus a symbol?
If the contents (the sequence of characters) of the object are important, use a string
If the identity of the object is important, use a symbol
Example:

name = "oggi'
name.object_id
pen_name - 'oggi'
pen_name.object_id
Symbol
a = :string
b = :string
a.object_id and b.object_id refer to the same object

- true vs. false - TrueClass and FalseClass
name = true
puts name.class
truthy and falsey  - everything is true except nill and false
if nil
	puts 'this is true'
else 
	puts 'false'
end  
this will return false; anything esle will return true;  

- arrays

- hashes - this is the equivalent of object literal;  

###Exercise 1
•   Write a simple Ruby program with the following features:
•   Creates a variable called   
name, sets it equal to your name, then outputs the variable
•   Assigns a new array to a variable called   
holidays with a list of  holidays inside of the array as strings
•   Creates a new hash assigned to a variable called 
holidays_and_dates  - the keys should be a holiday and the values should be the date it is celebrated, both strings


IF/else statments
- chomp just removes a new line


###Exercises 2
Create the following methods:
•   Adds five to argument given
•   Multiplies argument given by 15
•   Performs a mathematical operation using four integer and/or 
float arguments
•   Prints the argument given four times
•   Prints an uppercase version of the argument given


