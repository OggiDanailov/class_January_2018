Coding challenge for today:

- Write a function that takes one argument as a string and it checks if this argumement is a Palindrome (kayak);  

function palindrome(x){  
var temp = x.split("")  
var array = [];  
for(i=temp.length-1;i>=0;i--){  
	array.push(temp[i])  
}  var result = array.join('')  
if(result === x){  
	console.log(result + ' is a palindrome')  
}else {  
	console.log(result + ' is not a palindrome')  
}  
}

- talk about Objects in JS - in JS technically everything is an Object. We 