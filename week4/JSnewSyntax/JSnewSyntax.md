1. This scope, apply, call and bind:
 https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85

2. Arrow functions:
An arrow function does not have its own this;
example:  
function funcName(params) {  
   return params + 2;   
 }

var funcName = (params) => return params + 2; 

3. Ternary syntax:

var firstCheck = false,  
    secondCheck = false,  
    access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';  
    
    if(a > 0){    
    		'positive'  
    	}else if( a < 0){  
    		'negative'  
    	}else {  
    		'zero'  
    	}
    a>0 ? 'positive' : a<0 ? 'negative' : 'zero'
    	
    	
 4. map()  
 If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
 
 5. filter()   
 If i already have an array but i only want to have items in the array that match certain criteria, use the filter. 
 
 6. reduce()  
 If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
 
6a. forEach()   


7. Closures

8. Callbacks - a function passed as an argument to another function and executed within the first function;

9. CreateElement way of creating HTML elements through JS

10. IIFE - immediately ivoking function expression

11. recursive function