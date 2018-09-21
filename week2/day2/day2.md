coding challenge:
1. write a function that takes an array as an argument and lists all the items in this array.
2. write a function that takes two arguments, adds them and checks if the output is bigger than 100;
  if it is bigger it consoles "it is bigger than 10"; if not, it consoles "it is not bigger than 10"
3. Create an object literal called person; give some key value pairs as firstName and lastName; finally print the length of the firstName and the lastName of the object. 
4. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the corresponding number plus add the line 'it is an even';
if it is odd add the line 'it is odd'
5. Write a function that takes two numbers as arguments; if the two numbers are even print 'they are both even numbers';
if the two numbers are different print "there is one even and one odd"; if both numbers are odd print 'they are both odd'
6. wite a function that lists ONLY the odd numbers between 1 to 100



##Scope in Javascript

null vs. undefined
Null is used to define something programmatically empty. Undefined is meant to say that the reference is not existing. A null value has a defined reference to "nothing". If you are calling a not existing property of an object, then you will get undefined. If I would make that property intentionally empty, then it must be null so you know that it's on purpose. Many javascript libraries work like this way.


- global scope vs. local scope

 - examples of global scope; vars declared out of the scope of something  
 - var delcared inside a function has the local scope and it is accessible only within this function;  

 - var s = 1;  
  function whatever(){  
	var s= 14;  
	console.log(s)  
 }  
 
 Here we will print 14 since s is within the scope of the function whatever() and it will overwrite the global one;
 however, if I don't use the keyword var in the function whatever() then the global var s will be reassigned and it will have the value of 14 from now on; The importance of using var keyword;
 
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


##JS DOM manipulation

- DOM - document object model

- forms and inputs;

(difference between innerHTML and innerText - Unlike innerText, though, innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the same content but in HTML format.)  

###targeting elements from the DOM and use them in the JS:
 - document.getElementById()
 - document.getElementsByClassName()[0]
 - document.getElementsByTagName()[0]
 - document.querySelector()

 - innerHTML - this is a way of changing given content;
 
 ###Events
  - when something is pressed/clicked/hovered some other event is fired; an event handler can be attached to a given element and then, when clicked, a callback function gets fired;
  - addEventListener('click')
  - addEventListener('mouseover')
  - addEventListener('mouseout')
  - addEventListener('mousemove)
  - good source:
 https://developer.mozilla.org/en-US/docs/Web/Events
 

 
 
  ###Exercise 1
 •  Create a page with multiple elements, some nested inside of each other; 
 •   Practice selecting items and changing their contents from the JavaScript Console  
 •   Once you have the hang of it, write a script to change the content in at least 5 elements  
 • Use onclick and addEventListener to fire some changes on the DOM; 

 ###Exercise 2

- WRITE a small program that mimics basic calculator; You should have adding, subtracting, division and multiplication.
- add additional functionality - change the color of the result depending on:
    - if the result is zero the background color should change to green;
    - if the result is odd number the background color should change to red;
    -  if the result is even number the background color should change to blue;

 
 Check different events here: 
  https://developer.mozilla.org/en-US/docs/Web/Events
  Check different options for changing CSS through JS here:
  https://www.w3schools.com/js/js_htmldom_css.asp
  
 
 

 
 

 
 