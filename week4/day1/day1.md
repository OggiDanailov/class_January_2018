coding challenge:
1. write a method that gives you random names from an array in JS

function randomize(array){
var a = Math.floor(Math.random() * array.length)
return array[a]
}


1. write a function that takes an array of names and returns a whole string of these names with comma and the word 'and' before the last name;
["John", "George", "James", "Anna"] ---> "John, George, James, and Anna";

var names = ["Chris", "Oggi", "Emily"]; 

function concatArray(namesArray) {
	var returningString = "";

	for (var i = 0; i < namesArray.length; i++) {
		returningString += namesArray[i];
		if (i < namesArray.length - 2) {
			returningString += ", ";
		} else if (i === namesArray.length - 2) {
			returningString += ", and ";
		}
	}

	return returningString; 

2.      // Write a function that takes an array of arrays as an argument and returns an object literal. Instead of using the classic 'for' loop, use a 'forEach' loop.

     // For example:

     //  [["Dostoyevski", "Idiot"], ["Twain", "The price and the pauper"], ["Poe", "The raven"], ["Remark", "All quiet on the western front"], ["Kafka", "The process"]];

     //  Would become: 


     // {Dostoyevski: "Idiot", "Twain": "The prince and the pauper", "Poe": "The raven", "Remark": "All quiet on the western front", Kafka: "The trial" }
     
     var houseWords = [["Tully", "Family, Duty, Honor"], ["Stark", "Winter is Coming"], ["Lannister", "Hear me Roar!"], ["Martell", "Unbowed, Unbent, Unbroken"]];
​
function arrayToObj(arrayOfArrays) {   
    var returningObj = {};
​
    arrayOfArrays.forEach(function(innerArray) {
        var key = innerArray[0];
        var value = innerArray[1];

        returningObj[key] = value;

    });
​
    return returningObj;
}
​
var houseWordsObj = arrayToObj(houseWords);  

     
     
Cookies:

What is a cookie?  
•   A cookie is a piece of browser technology that allows 
websites to store small key-value pairs of data on a user's 
local machine  
•   Every cookie is set to expire eventually, removing itself from 
the users' machine  
•   May also be referred to as a "web cookie", "browser cookie", 
or "HTTP cookie"  

Cookie use cases
•   Saving user preferences for a web app - like the status of a 
sliding navigation element (open or closed)  
•   Remembering that a user is logged in by giving them an 
access key that eventually expires  
•   Track where a user has gone on your website/where they are coming from  

Using cookies:
- I have to pass you the cookies.min.js file  

- Serve a local directory with 
WEBrick
You'll need a webserver running to store cookies locally. It's easy to 
serve a local directory over HTTP with WEBrick. Just run the following 
command.  

echo -e '\nalias served="ruby -run -e httpd . -p 5000"' >> ~/.bash_profile && source ~/.bash_profile  

Then cd to the directory you want to serve and type 'served'. Point 
your browser to   

http://localhost:5000


Exercises
•   Create a web page that asks a user for their name using a 
form. When they click a button, have their name stored in a 
cookie. When they refresh the page, if their name has been 
set, welcome them to the page by retrieving the stored 
cookie value.  
