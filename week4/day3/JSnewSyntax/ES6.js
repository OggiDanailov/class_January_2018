// 1. forEach()
// it is just like a for loop with the difference that for loop uses the index [i]
// to loop through the array whereas forEach(el) targets each idividual element in the array
// slower than the for loop; there are less scope issues though

// var numbers = [1,2,3,4,5,6]

// numbers.forEach(function(element){
// 	console.log(element)
// });
// the parameters in the callback function are:
// currentValue
// index

// var names = ["oggi", 'boro', 'spas']
// names.forEach(function(element, index){
// 	console.log(index + " " + element)
// })

// element is the currentValue in the array - it will loop through each item in the
// array.
// index is the corresponding index of each element in the array

// 2. map()
 // If i already have an array and i want to do the exact same 
// // operation on each of the elements in the array and return the 
// // same amount of items in the array, use the map.

// The difference between forEach() and map() is that map() will return an array
// with the new value of each item in it.
// EX.
 
// you want to convert  each element to be in a different format, 
// you could use the map function to create a new array with new elements.

// var bdays = ['08-14', '10-04', '04-21'];

// var bdays2 = bdays.map(function(elem) {   
//   return elem.replace('-', '/');  
// }); 

// you can pass currentValue and index as parameters in the callback function (just
// 	like in forEach())


// 3. filter()
// // If i already have an array but i only want to have items in the array that match certain criteria, use the filter. 
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// var arr = [
//     {"name":"apple", "count": 2},
//     {"name":"orange", "count": 5},
//     {"name":"pear", "count": 3},
//     {"name":"orange", "count": 16},
// ];
    
// var newArr = arr.filter(function(item){
//     return item.name === "orange";
// });

// 4. reduce()
// If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
//  The reduce function applies a specific function to all the elements in an array and reduces it to a single value.  We can use the reduce function to add up all the numbers in an array for example. The four arguments the reduce function takes are:
 
// 1) previous value  
// 2) current value  
// 3) current index  
// 4) original array  

// var nums = [1, 2, 3, 4];  

// var sum = nums.reduce(function(prevVal, curVal,   curIndex, origArr) {  
//   return prevVal + curVal;  
// });  

// console.log(sum); // => 10



// 5. **Arrow functions:**
// An arrow function does not have its own this;
// An arrow function expression has a shorter syntax than a function expression
//  and does not have its own this, arguments, super, or new.target.
//   These function expressions are best suited for non-method functions,
//    and they cannot be used as constructors.
// example: 
// array.forEach(x => console.log(x))
 
// function funcName(params) {  
//    return params + 2;   
//  }

// var funcName = (params) => return params + 2; 

// **6. Ternary syntax:**

// var firstCheck = false,  
//     secondCheck = false,  
//     access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';  
    
//     if(a > 0){    
//     		'positive'  
//     	}else if( a < 0){  
//     		'negative'  
//     	}else {  
//     		'zero'  
//     	}
//     a>0 ? 'positive' : a<0 ? 'negative' : 'zero'

// 7. **template literal:**

// Template literals are string literals allowing embedded expressions. 
// You can use multi-line strings and string interpolation features with them.
// For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// Usual way of writing embedded js with strings:

// var a = 5;
// var b = 10;
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// With template literal you can write the same expression like that:

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);

// 8. **IIFE - immediately ivoking function expression**

// (function(){
// 	console.log('wahtever')
// })()

// this is self-invoking function - meaning when you lead the script the function
// will call itself and executes itself.
