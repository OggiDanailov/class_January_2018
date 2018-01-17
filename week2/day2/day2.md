coding challenge:

1. write a function that takes two arguments, adds them and checks if the output is bigger than 100;
2. write a function that lists all the numbers from 0 to 100; if the outcome number is even print to the console the number plus  add the line 'it is an even';
if it is odd add the line 'it is odd'

##Scope in Javascript

- global scope vs. local scope

 - examples of global scope; vars declared out of the scope of something  
 - var delcared inside a function has the local scope and it is accessible only within this function;  

 - var s = 1;  
  function whatever(){  
	var s= 14;  
	console.log(s)  
 }  
 
 Here we will print 14 since s is within the scope of the function whatever() and it will overwrite the global one
 
 - block scope - within an if statement var will not have a local scope. Example:  
 
 var c = 10;  

function hallo(){  
if(true){  
	let c = 2;  
 }  
console.log(c);  
 //if var c = 2 it will print 2 on the console; if you change it to let it will print 10
}

##JS DOM manipulation

- DOM - document object model

- forms and inputs;

######(difference between innerHTML and innerText - Unlike innerText, though, innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the same content but in HTML format.)  

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
 
 example with the calculator:
 
 
  ###Exercise 1
 •  Create a page with multiple elements, some nested inside of each other; 
 •   Practice selecting items and changing their contents from the JavaScript Console  
 •   Once you have the hang of it, write a script to change the content in at least 5 elements  
 • Use onclick and addEventListener to fire some changes on the DOM;
 
 

 
 

 
 