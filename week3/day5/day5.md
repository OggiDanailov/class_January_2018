coding challenge:

1.  Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function should return [4, 6].


2.  Write a program that prints the numbers from 1 to 100. For multiples of three print “Rick” instead of the number and for the multiples of five print “Roll”. For numbers which are multiples of both three and five print "RickRoll".

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
 {"animals": ["zebra","ostrich","baboon"  ]}
 
 var parsing = JSON.parse('{"animals": ["zebra","ostrich","baboon"  ]}')  
 parsing.animals[0]
 
 AJAX - Asynchronous Javascript and XML
 you send a request to a given page without reloading the page; 
 $.ajax({    
 type: "POST",      
 url: "/request",     
  data: {q: "131 Humboldt St"}})
  
  Cross-domain considerations  
  •   You cannot normally make an AJAX request across different domains  
  •   CORS is the policy that defines this, an acronym that stands for "Cross-Origin Resource Sharing"  
  •   Some domains don't allow you to ping them from other domains and some do
 
 
  

