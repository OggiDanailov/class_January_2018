// 1. write a method that finds the lowest number in an array; do not use sort();

// 2. write a method that uses sort() and arranges given array of numbers in ascending order
	// array = [3,5,4,6,2,7,1,8,9]

// 3. write a function that takes two arguments - an array and a target number;
// the function checks if the target number is in the array and returns the corresponding index of this number in the array;
// if not, returns -1
// a) google what linear sorting is and try to do it in this way
	function linearSearch(array, target){
		for(let i = 0;i<array.length;i++){
			if(target == array[i]){
				return i
			}

		}
			return -1
	}

// b) google what binary sorting is and try to resolve it in this way

function search(array, target){
	var left = 0;
	var right = array.length-1
	while(left <= right){
		var mid = left +  Math.floor((right-left)/2)
		if(array[mid] == target){
			return mid
		}
		if(array[mid] < target){
			left = mid + 1;
		}else {
			right = mid - 1
		}
	}
		return -1

}





// 2. sort()

// If a-b is less than 0,  a comes first.
// If a-b returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
// If a-b is greater than 0,  i.e. b comes first.

array = [2,3,4,6,5,8,7,9]

array.sort(function(a,b){
	return a-b
})



// 1. find all the duplicates in an array and return them

// (1) Loop through the array
// (2) At each element check if it exists in the hash table, which has a lookup of O(1) time
// (3) If the element exists in the hash table then it is a duplicate, if it doesn't exist, 
// insert it into the hash table, also O(1)

// function duplicates(arr) {
  
//   // our hash table to store each element
//   // in the array as we pass through it
//   var hashTable = [];
  
//   // store duplicates
//   var dups = [];
  
//   // check each element in the array
//   for (var i = 0; i < arr.length; i++) {
    
//     // if element does not exist in hash table
//     // then insert it
//     if (hashTable[arr[i].toString()] === undefined) {
//       hashTable[arr[i].toString()] = true;
//     } 
    
//     // if element does exist in hash table
//     // then we know it is a duplicate
//     else { dups.push(arr[i]); }
    
//   }
  
//   return dups;
  
// }

function duplicates(array){
	var repeat = [];
	var norepeat = [];
	for(let i = 0;i<array.length;i++){
		for(let j = i+ 1;j<array.length;j++){
			if(array[i] == array[j]){
				repeat.push(array[i])
			}
		}
	}	
	return repeat + ' these are the repetable' + "\n" 
}

duplicates([1, 21, -4, 103, 21, 4, 1, 7, 7]);



2. write a method that takes a string of consequtive numbers and exchnage the positions of the elements 
var string = "1010101010101010" => "01010101010101010"
(think about bubble sorting)

steve:
function swapIndex(string){
  var stringArr = string.split('');
  var firstValue = stringArr[0]
  for(let i=0; i<stringArr.length; i++){
    if(i !== stringArr.length-1){
      stringArr[i] = stringArr[i+1];
    }
    else{
      stringArr[i] = firstValue;
    }
  }
  console.log(stringArr.join(''))
}

console.log(swapIndex('03030303'))
console.log(swapIndex('101010101010'))

 





// 3. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.


4. write a function that takes two arrays, sorts them in ascending order, elimiates all the numbers below 20 and estimates the sum of which is higher
ex. ar1 = [1,3,6,8,12,23,34,45] => sum is 102
	ar2 = [2,4,6,12,,43,54] => sum is 97

	steve's approach:

function compareArrays(arr1, arr2){
  var arr1 = arr1.sort(function(a,b){return a-b})
  var arr2 = arr2.sort(function(a,b){return a-b})

  var reducedArr1 = arr1.filter(function(x){return x>20})
  var reducedArr2 = arr2.filter(function(x){return x>20})

  var sum1 = reducedArr1.reduce(function(a,b){return a+b});
  var sum2 = reducedArr2.reduce(function(a,b){return a+b});
  console.log(`Sum of nums greater than 20 in arr1: ${sum1}`)
  console.log(`Sum of nums greater than 20 in arr2: ${sum2}`)
}

ar1 = [1,3,6,8,12,23,34,45]
ar2 = [2,4,6,12,43,54]
console.log(compareArrays(ar1, ar2))

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	function arraying(ar1, ar2){
			var hash1 = [];
			var hash2 = [];
		var tempArray1 = ar1.sort(function(a, b){
			return a - b;
		})

		var tempArray2 = ar2.sort(function(a, b){
			return a - b;
		})
		for(let i = 0;i<tempArray1.length;i++){
			if(tempArray1[i] > 20){
				hash1.push(tempArray1[i])
			}
		}

		for(let i = 0;i<tempArray2.length;i++){
			if(tempArray2[i] > 20){
				hash2.push(tempArray2[i])
			}
		}

		sum1(hash1)
		sum2(hash2)
	}

	function sum1(array){
		var sum = 0;
		for(let i = 0;i<array.length;i++){
			sum += array[i]
		}
		console.log(sum + " this is the sum of the first array")
	}

	function sum2(array){
		var sum = 0;
		for(let i = 0;i<array.length;i++){
			sum += array[i]
		}
		console.log(sum + " this is the sum of the second array")
	}


New challenge:
write a method that substitutes the position of 'a' and 'c' in the string:
var string = 'abcabcabcabcabcabc' => "cbacbacbacbacbacba"

function sub(x){
	array = x.split("")
	for(let i = 0;i<array.length;i++){
		if(array[i] == 'a' && array[i+2] == "c"){
			var temp = array[i]
			array[i] = array[i+2]
			array[i+2] = temp;
		}
	}
	return array.join("")
}

2. write a method that substitutes Geroge with Susan and he with she:
// var string = "every time when the phone was ringing George was picking it up; 
// this whas one of Geroge's most annoying habbits given that he couldn't really talk.
//  At least nobody at home could understand George; he didn't try to be
//   understood either"








