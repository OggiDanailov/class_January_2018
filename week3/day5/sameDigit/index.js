// 4. Create a function that takes 2 numbers as arguments.
//  Return true if there is a digit that appears in both numbers. 
//  Example: // sameDigit(5, 65) -> true // sameDigit(23, 82) -> true // 
//  sameDigit(85, 49) -> false


function sameDigit(num1, num2){
	var array1 = num1.toString().split("")
	var array2 = num2.toString().split("")
	for(let i = 0; i<array1.length; i++){
		for(let j = 0; j<array2.length; j++){
			if(array1[i] == array2[j]){
				console.log(true)
			} else {
				console.log(false)
			}
		}
	}

}

sameDigit(492, 872)


