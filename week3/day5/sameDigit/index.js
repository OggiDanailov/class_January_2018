// 4. Create a function that takes 2 numbers as arguments.
//  Return true if there is a digit that appears in both numbers. 
//  Example: // sameDigit(5, 65) -> true // sameDigit(23, 82) -> true // 
//  sameDigit(85, 49) -> false


// function sameDigit(num1, num2){
// 	var array1 = num1.toString().split("")
// 	var array2 = num2.toString().split("")
// 	for(let i = 0; i<array1.length; i++){
// 		for(let j = 0; j<array2.length; j++){
// 			if(array1[i] == array2[j]){
// 				console.log(true)
// 			} else {
// 				console.log(false)
// 			}
// 		}
// 	}

// }

// sameDigit(492, 872)

// Compare the two objects whether there is an unique property in the first one compared to the second one.

var obj = {
	fname: "John",
	lname: 'Smith',
	country: 'USA',
	gender: "male",
	age: 32,
	address: 'whatever street 1122',
	state: 'Iowa',
	car: true,
	animals: true,
	insurance: true,
	martial_status: true
}

var obj2 = {
	fname: "John",
	lname: 'Smith',
	country: 'Spain',
	age: 34,
	address: 'Reina amalia 43',
	smoker: true,
	state: 'Catalunya',
	car: false,
	insurance: false,
	martial_status: false
}

function whatever(ob1, ob2){
	var ob1Keys = Object.keys(ob1);
	var ob2Keys = Object.keys(ob2);
	
	var keys = [];

	for(let i = 0;i<ob1Keys.length; i++){
		var status = false
		for(let j = 0;j<ob2Keys.length; j++){
			if(ob1Keys[i] == ob2Keys[j]){
				status = true;
			}
		}
		if(status == false){
			keys.push(ob1Keys[i])

		}
	}
	
	

	return keys 
}












