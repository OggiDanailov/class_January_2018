Coding challenges:

1. Write a function that has two parameters (arguments). The function should subtract the first argument from the second argument. If the result is a positive number print the number + "this is a positive number"; if not, print "this is a negative number"
2. Write a function that prompts the user for a number; if the number is smaller than 0 print "this number is smaller than 0"; if the number is 0 print " the number you inserted is zero"; if the number is bigger than 0 then:
   if the number is bigger than 100 print " this is bigger than 100"; if the number is smaller than 100 print "it is smaller than 100"; if it is 100 print " it is 100"

function numbers () {
    var number = prompt("give me a number")

    if( number > 0 ) {
        if(number > 100) {
            console.log(number + " is bigger than 100")
        } else if (number < 100) {
            console.log (number + " is smaller than 100")
        } else {
            console.log(number + " is 100 ") 
        }
    
    } else if (number < 0) {
        console.log(number + " is smaller than zero")
    } else {
        console.log("the number that you inserted is zero")
    }

}

3. Write a function that takes an array with numbers as an argument and adds the sum of these numbers; hint - create a var within the function that equals zero and assign the sum of the array to it;

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

##JS DOM manipulation

- DOM - document object model

Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the visible (or better yet: rendered) document object model/DOM.

Since window is the global object you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.

- forms and inputs;

(difference between innerHTML and innerText - Unlike innerText, though, innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the same content but in HTML format.)  

###targeting elements from the DOM and use them in the JS:

- document.getElementById()

- document.getElementsByClassName()[0]

- document.getElementsByTagName()[0]

- document.querySelector()

- innerHTML - this is a way of changing given content;
  
  ###Events
  
  - when something is pressed/clicked/hovered some other event is fired; an event handler can be attached to a given element and then, when clicked, a callback function gets fired; There are key events (when keys are pressed), there are mouse events (when you click with the mouse or you hover with the mouse);
  - addEventListener('click')
  - addEventListener('mouseover')
  - addEventListener('mouseout')
  - addEventListener('mousemove)
  - good source:
    https://developer.mozilla.org/en-US/docs/Web/Events
