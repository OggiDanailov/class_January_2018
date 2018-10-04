 
   coding challenge:

1.  Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function should return [4, 6].

1. 1/2 
Create a function that takes two arrays, each having elements that are numbers. Compare the sum of the numbers in each array. Return the array with the largest sum. Example:
var array1 = [1,54,65,345,54,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
var array2 = [123, 32, 123,432,345,234,567,789,56,345,65,34,456,23,543,2,345,23,45,2,234,34,234,234,34,234, 434]


2.  Write a program that prints the numbers from 1 to 100. For multiples of three print “Rick” instead of the number and for the multiples of five print “Roll”. For numbers which are multiples of both three and five print "RickRoll".

3. Create a function that takes 2 numbers as arguments. Return true if there is a digit that appears in both numbers. Example:
// sameDigit(5, 65) -> true
// sameDigit(23, 82) -> true
// sameDigit(85, 49) -> false

4. Write a function that in each second with math.random gives you a number between 1 to 100. If the number is even print 'even' on the screen plus the number and changes the background color to red; if the number is odd print 'whatever' on the screen plus the number plus changes the background color to green

List of Jquery methods:
https://www.w3schools.com/jquery/jquery_events.asp

Jquery
$ sign; history of Jquery why shouldn't be studied in detials these days:  
The $(document).ready() snippet  
•   This snippet ensures that your code doesn't run until your document fires a ready event  
•   The ready event fires when all of the page's DOM elements are loaded, even if multimedia elements aren't fully loaded  
•   By encapsulating all of our jQuery code to only run when the document is ready, the elements you're selecting will definitely be on the page when you access them
Jquery functions:
hide()  
show()  
fadeIn(3000)  
fadeOut(4000)
slideUp()  
slideDown()  

Animation:  
$(".my-element").animate(  
 {  opacity: 0.25,  width: "70%"}  
  , 2000 );
  
 Click:  
 $("ul li a").click(function()  {    alert('imclicked!');  
   });
   
   Animation callbacks:
   
   var animateMenu = function(){  $(".menu").animate( {opacity: .5} )} 
   $(".menu").show(animateMenu);
   
   The last example could also be written like this:
   $(".menu").show( function(){  
      $(".menu").animate( {opacity: .5} )}
   )
   
   http://api.jquery.com/category/effects/custom-effects/
   
   Exercise - using jQuery  
   •   Create a basic HTML page with no styling that has at least 10 separate elements on it  
   •   Use jQuery to create an animated "show"! Try changing an element's CSS, hiding, showing, fading, and sliding, and making the page run amok  
   •   Once the "show" works, rig it up to only fire when the user clicks anywhere on the page  
   •   If you finish this exercise, implement jQuery into some of the websites you built last week and try playing around with some other functions: http://api.jquery.com/
   
 ///////////////////
 
 JSON - javascript object notation
 ex:  
 http://json.org/example.html  
 '{ "name":"John", "age":30, "city":"New York", "gender":"male"}'
 
 var parsing = JSON.parse('{ "name":"John", "age":30, "city":"New York"}')  
 

 JSON.stingify() - will convert object literal into JSON:

 
 Aplication Programming Interface
 
 AJAX - Asynchronous Javascript and XML
example of asynchronous behavior:
https://medium.com/front-end-hacking/ajax-async-callback-promise-e98f8074ebd7


Example of asynchornous behaviour:

function showSessionExpire(){
   console.log("Your session expired");
 }
setTimeout(showSessionExpire, 1000);
 console.log("showSessionExpire will execute after 1000 ms");


 Here first we will print the second console log and then the first console log although it will come first.


 you send a request to a given page without reloading the page; 
 $.ajax({    
 type: "POST",      
 url: "/request",     
  data: {q: "131 Humboldt St"}})
  
  Cross-domain considerations  
  •   You cannot normally make an AJAX request across different domains  
  •   CORS is the policy that defines this, an acronym that stands for "Cross-Origin Resource Sharing"  
  •   Some domains don't allow you to ping them from other domains and some do
 
 
  


