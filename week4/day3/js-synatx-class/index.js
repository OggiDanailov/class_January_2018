// Morning challenges

// 1. Replace globally all the instances of letter 's' in the array with number 7:

// var ssssh = ["seven", "siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']
// Emmanuel's method
// var ssssh = ["seven", "Siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']
// var combine = ssssh.join()

// var rep = combine.replace(/s/, 7)
// console.log(rep)
// gi - g stands for globallyi - stands for insensitive

// Aaron's way:

// var ssssh = ["seven", "Siouxie", 'seventeen', 'massacre' , 'messiah', 'massachussets']

// function replaceVowels(arg1, arg2){
// 	var string1 = ssssh.toString()
// 	var string2 = string1.split("")
// for(let i = 0;i<string2.length;i++){
// 	if(string2[i] == arg1){
// 		string2.splice(i, 1, arg2)
// 	}
// }
// 	console.log(string2.join(""))
// }

// 2. Write a function that takes an array as an argument and returns the array in reverse order e.g.
// [2,3,4,5,6,7]  ----> [7, 6, 5, 4, 3, 2]


// function whatever(array){
// 	for(let i = array.length-1;i>=0;i--){
// 		console.log(array[i])
// 	}
// }

// 3. Write a function that takes a string as an argument and inserts each letter as a 
//  separate item in an array. The new array should contain ONLY the consonants (not the vowels)

// e.g.

// 'string' => ['s', 't', 'r', 'n', 'g' ]

// Steven's version
// function noV(string){
// var vowels = ['a', 'e', 'i', 'o', 'u']
// 	var letters = string.split("")
// 	for(let i =0;i<letters.length;i++){
// 		if(vowels.includes(letters[i])){
// 			letters.splice(i, 1)
// 		}
// 	}	
// 	console.log(letters)
// }

// Oggi's solution

// function noV(string){
// 	var letters = string.split("")
// 	var array = [];
// 	for(let i=0;i<letters.length;i++){
// 		if(letters[i] !== 'i' && letters[i] !== "a" && letters[i] !== "o"){
// 			array.push(letters[i])
// 		}
// 	}
// 	console.log(array)
// }

// 4. Write a method that takes the first array from the object and combines it into a
 // string with the second array in the object. e.g. ---> 'abracadabra'

// var obj = [
// ['a', 'b', 'r', 'a'],
// {array: [ 'c', 'a', 'd', 'a', 'b', 'r', 'a']}

// ]

// console.log(obj[0] + obj[1].array)

// 5. Write a method that gives
//  you the sum of all numbers that are mulitpliers of 3 or 4 under 1000

// function adding(){
// 	var sum = 0;
// 	for(let i = 1;i<15;i++){
// 		if(i % 3 == 0 || i % 4 == 0){
// 			console.log(i)
// 			sum += i
// 		}
// 	}
// 	console.log(sum)	
// }
// 6. Write a recursive method that gives you all  numbers from 1 to 100

// function positive(num){
// 	if(num == 101){
// 		return num;
// 	}else {
// 		console.log(num)
// 	}
// 	positive(num + 1)
// }

// Hoisting - 
// https://scotch.io/tutorials/understanding-hoisting-in-javascript
// console.log(a)

// var a = 'whatever';
// var person1 = new Person("Jeremy", 23)

// function Person(name, age){
// 	this.name = name;
// 	this.age = age
// }

// var person2 = new Person("eli", 32)

// class Person{
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// Arrow functions in javascript

// function whatever(){
// 	console.log('hello')
// }

// var whatever = (name) => console.log(name)

// array = [1,2,3,4,5,6]
// array.forEach(element => console.log(element))

// array.forEach(function(element){
// 	console.log(element)
// })

// array.forEach((element)=>{
// 	console.log(element)
// })


// Ternery syntax

 // if(a > 0){    
 //    		'positive'  
 //    	}else if( a < 0){  
 //    		'negative'  
 //    	}else {  
 //    		'zero'  
 //    	}
// a = 10
// function w(a){
//   return a > 0 ? "positive" : a < 0 ? 'negative' : 'zero'
// }






























