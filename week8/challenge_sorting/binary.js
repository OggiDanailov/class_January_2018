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

// duplicates([1, 21, -4, 103, 21, 4, 1]);

2. write a method that takes a string of consequtive numbers and exchnage the positions of the elements 
var string = "1010101010101010" => "01010101010101010"
(think about bubble sorting)


3. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.


4. write a function that takes two arrays, sorts them in ascending order, elimiates all the numbers below 20 and estimates the sum of which is higher
ex. ar1 = [1,3,6,8,12,23,34,45] => sum is 102
	ar2 = [2,4,6,12,,43,54] => sum is 97











