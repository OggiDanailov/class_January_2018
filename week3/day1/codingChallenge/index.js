// 1. Find Beatles. You have an array of objects. Write a function that takes one argument - the array named list - 
// and filters all the persons from this list born in Liverpool. Return an object that contains a property of names and 
// value of an array of the names of all persons from Liverpool.

var list = [
	person1 =  {
		name: "john",
		age: 23,
		location: 'Liverpool'
	},
	person2 =  {
		name: "james",
		age: 73,
		location: 'Chicago'
	},
	person3 = {
		name: "george",
		age: 43,
		location: 'Liverpool'
	},
	person4 = {name: "paul",
		age: 54,
		location: 'Liverpool'
	},
	person5 = {
		name: "ringo",
		age: 43,
		location: 'Liverpool'
	},
	person6 = {
		name: "mick",
		age: 43,
		location: 'London'
	},
	person7 = {
		name: "keith",
		age: 93,
		location: 'London'
	},
	person8 = {
		name: "jim",
		age: 53,
		location: 'Los Angeles'
	}

]

obj = {}

function listSelection(arg){
	var array = [];
	for(let i = 0;i<arg.length;i++){
		if(list[i].location == "Liverpool"){
			array.push(list[i].name)
		}

	}
return obj.names = array;
}










// 1. Create a function that takes an array of numbers as an argument
//  and returns the sum of all of the Even and all of the Odd numbers


// function sumOddandPair(array){
// 		var oddArray = [];
// 		var pairArray = [];
// 		var oddSum = 0;
// 		var pairSum = 0;
// 	for(let i=0;i<array.length;i++){
// 		if(array[i] % 2 === 0 ){
// 			pairArray.push(array[i])
// 		}else {
// 			oddArray.push(array[i])
// 		}
// 	}
// 	for(let i=0;i<pairArray.length;i++){
// 		pairSum += pairArray[i]
// 	}
// 	for(let i=0;i<oddArray.length;i++){
// 		oddSum += oddArray[i]
// 	}

// 	return "The sum of all pair numbers is: " + pairSum + " The sum of all odd numbers is: " + oddSum

// }

// function sumOddandPair(array){
// 	var oddArray = [];
// 	var pairArray = [];
// for(let i=0;i<array.length;i++){
// 		if(array[i] % 2 === 0 ){
// 			pairArray.push(array[i])	
// 		}else {
// 			oddArray.push(array[i])	
// 		}
// 	}
// 	sumEven(pairArray)
// 	sumOdd(oddArray)
// }

// function sumEven(array){
// 	var even=0;
// 	for(let i=0;i<array.length;i++){
// 		even += array[i]
// 	}
// 	console.log(even)
// }


// function sumOdd(array){
// 	var odd = 0;
// 	for(let i=0;i<array.length;i++){
// 		odd += array[i]
// 	}
// 	console.log(odd)
// }

// var box = document.getElementById('box')

// document.addEventListener('keypress', function(event){
// 	box.innerHTML = event.key
// })



