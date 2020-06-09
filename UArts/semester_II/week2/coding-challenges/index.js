// let person = {
// 	fname: "Doris",
// 	lname: 'Dillan',
// 	age: 44,
// 	country: "Canada",
// 	profession: "swimmer"
// }

// 1. write a method that takes an object literal and returns two arrays containing
// only the keys and only the values;
// valueArray = ["Doris", "Dillan", 44, "Canada", "swimmer"]
// keyArray = ["fname", 'lname', 'age', 'country', 'profession']
// checkout what Object.keys() and Object.values() do
// 2. merge the arrays and have one final array that contains ["fname", 'Doris', "lname", "Dillan" etc.]

// function objConverter(obj) {
// 	var valueArray = []
// 	var keyArray = []
// 	finalArray = []

// 	var keyArray = Object.keys(obj)
// 	var valueArray = Object.values(obj)

// 	for(let i = 0; i < keyArray.length; i++) {
// 			finalArray.push(keyArray[i])
// 			finalArray.push(valueArray[i])
// 	}

// 	return finalArray
// }

// 3. find the highest number in an array
// var numbers = [1, 5, 8, 12, 56, 34, 2, 45]

// function highestNumber (array) {
// 	var highest = array[0]

// 	for(var i = 0; i < array.length; i++) {
// 		if(array[i] > highest) {
// 			highest = array[i]
// 		}
// 	}
// 	return highest;
// }

4. compare two arrays

var array1 = [1,2, 4, 5]
var array2 =  [1, 2, 3, 6]


function compareNumbers (ar1, ar2) {
	var uniqueArray = []
	for(let i = 0;i < ar1.length; i++) {
		var status = false;
		for(let j = 0; j < ar2.length; j++){
			if (ar1[i] === ar2[j]) {
				status = true
			}
		}
		if(status == false) {
			uniqueArray.push(ar1[i])
		}
	}
	return uniqueArray
}












