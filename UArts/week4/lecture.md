coding challenge:


1. Write a function that lists the first and last name of all the beatles:
var data = [
    {fname: "george", lname: "harrison"},
    {fname: "paul", lname: "mccarthney"},
    {fname: "ringo", lname: 'starr'},
    {fname: "john", lname: 'lennon'}
]

the function should return: "george harrison", "paul mccarthney", "ringo starr", "john lennon"

2. Write a function that takes an array with numbers as an argument and adds the sum of these numbers; hint - create a var within the function that equals zero and assign the sum of the array to it; => ex. [1,2,3,4,5] => 15

Lecture - built in functionality in JS;

https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

built-in methods are for strings, or for arrays or for objects.

length
reverse() - works on array and returns an array;
split() - works on string and converts it into an array; takes an argument;
join() - works on an array, takes an argument and returns a string
push() - works on array and inserts into the array an item at the end;
pop() - it removes and item from the array;

concept of return in functions - every function returns something; some sort of value. the function stops executing when it returns something.
annonymous functions and functions assigned to variables

var a = function() {
	console.log("this is a")
}

var b = function( x, y) {
	return x + y;
}

Exercise - 
1. write a function that takes a string as a parameter and checks if this is a palindrome;
2. write a function that takes an array of numbers as an argument and returns only the even numbers from this array;





- global scope vs. local scope

 - examples of global scope; vars declared out of the scope of something  
 - var delcared inside a function has the local scope and it is accessible only within this function;  

 - var s = 1;

  function whatever(){  
	var s = 14;  
	console.log(s)  
 } 

 whatever()
 console.log(s) 

 Here we will print 14 since s is within the scope of the function whatever() and it will overwrite the global one;
 however, if I don't use the keyword var in the function whatever() then the global var s will be reassigned and it will have the value of 14 from now on; The importance of using var keyword;

  const number = 1;

  function whatever(){  
  number = 14;  
  console.log(s)  
 }
 
 - block scope - within an if statement var will not have a local scope. Example: 


 
 var c = 10;  

function hallo(){  
if(true){  
	let c = 2;  
 }  
console.log(c);  
}

 //if var c = 2 within the block it will print 2 on the console; var c will be available thourgh the whole function; however, if you change it to let c = 10 it will print 10. Two has only block scope and it is available within the bock if(true) statement.


 // Currently the two nested for loops behave in correct way; in the inner for loop
// since we are using let i is available only within the inner for loop;
// In this scenario JS does not mix the two i values


for(let i = 0;i< 3;i++){
  console.log(i)
  for(let i = 111; i<113;i++){
    console.log(i)
  }
}

however, if we change the let to var then everything breaks; i is 0 originally, then it gets two the second loop, reassigns i to 111 then to 112 and when it gets back to the original for look it is 112 and it doesn't take action at all.


Callback function

- callback function;
    A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’. They are passed as arguments to another function;

        function hello(){
          console.log('hello')
        }
        function world(){
          console.log('world')
        }
        hello()
        world()

      Written in this way, you will print 'hello' and 'world' one after another on the screen.
      However, if you wrap console.log('hello') in a settimeout it won't print it in the same order.
        function hello(arg){
          setTimeout(function(){
            console.log(arg)
          }, 3000)

        }

        function world(){
          console.log('this is the world')
        }
      
      JavaScript didn’t wait for a response from hello() before moving on to execute world(). JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.


      Homework: write a small program that prints the actual time in real time on the screen.
      the project should have:
      printing the clock in am/pm;
      the background-color of the screen changes dynamically;
      the whole project is styled 


      CH:

      // write a method that grabs the array below and returns all the content without "/static"
// ex.  "/static/image1.jpg" => "image1.jpg"



function whatever (array) {
     var empty = []
     var result = []
     for(let i = 0;i<array.length;i++) {
         empty.push(array[i].split("/"))
         result.push(empty[i][empty[i].length-1])
     }
     console.log(result)
 }

 var empty = []
var result = []
for(let i = 0;i<images.length;i++) {
    empty.push(images[i].split("/static"))
    result.push(empty[i][1])
}


 let images = [
 "/static/image1.jpg", "/static/image2.jpg", "/static/image3.jpg", "/static/image4.jpg",
 "/static/image5.jpg", "/static/image6.jpg", "/static/image7.jpg", "/static/image8.jpg",
 "/static/image9.jpg", "/static/image10.jpg", "/static/image11.jpg", "/static/image12.jpg"
 ]



 Final project:

  - create an individual website about you; you should think of it as your portfolio;
  - the website should have: About me section, section where someone can see your projects/github repo links; contact me section; feel free to add anything else you would like to;
  - the website should have a modal - a div that appears a sec or two after you launch the page; this modal can appear on any of the pages (could be your contact info for example);
  - the website should have a image carousel where you can press buttons and go left or right and see different photos; 
   







