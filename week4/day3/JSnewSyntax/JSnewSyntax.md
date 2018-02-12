1. This scope, apply, call and bind:
 https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85

2. **Arrow functions:**
An arrow function does not have its own this;
example:  
function funcName(params) {  
   return params + 2;   
 }

var funcName = (params) => return params + 2; 

**3. Ternary syntax:**

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
    
    
  - article about map(), reduce() and filter():
 https://coderbyte.com/algorithm/map-reduce-filter-javascript-functional-programming  	
    	
 **4. map()  **
 If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
 - The map function creates a new array by calling a specific function on each element in an initial array. For example, if you have an array of strings in the form "MM-DD" that represent birthdays and you want to convert each element to be in a different format, you could use the map function to create a new array with new elements. 
 - Example:
var bdays = ['08-14', '10-04', '04-21']; 

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array   
var bdays2 = bdays.map(function(elem) {   
  return elem.replace('-', '/');  
});  

console.log(bdays2); // => ['08/14', '10/04', '04/21']
 
** 5. filter()   **
 If i already have an array but i only want to have items in the array that match certain criteria, use the filter. 
 The filter function creates a new array with all elements from an original array that pass a certain functions test. For example, you can use the filter function to create a new array of only positive values, like below. The function being called takes in an argument which is the value of the current element in the array.
 
 var nums = [-4, 3, 2, -21, 1];  

var pos = nums.filter(function(el) {  
  return el > 0;  
});  

console.log(pos); // => [3, 2, 1]  
 
 6. reduce()  
 If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
 The reduce function applies a specific function to all the elements in an array and reduces it to a single value.  We can use the reduce function to add up all the numbers in an array for example. The four arguments the reduce function takes are:
 
1) previous value  
2) current value  
3) current index  
4) original array  

var nums = [1, 2, 3, 4];  

var sum = nums.reduce(function(prevVal, curVal,   curIndex, origArr) {  
  return prevVal + curVal;  
});  

console.log(sum); // => 10    
 
**6a. forEach()**   


7. Closures

**8. Callbacks **- a function passed as an argument to another function and executed within the first function;

9. CreateElement way of creating HTML elements through JS

10. IIFE - immediately ivoking function expression

11. **recursive function**