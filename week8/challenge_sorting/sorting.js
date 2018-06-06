// 3. write a function that takes two arguments - an array and a target number;
// the function checks if the target number is in the array and returns the corresponding index of this number in the array;
// if not, returns -1
// a) google what linear sorting is and try to do it in this way


function searchLinear(array, target){
	for(let i = 0;i<array.length;i++){
		if(target == array[i]){
			return i;
		}
	}

	return -1
}

array = [1,2,3,4,5,6,7,8,9]

searchLinear(array, 4)

// b) google what binary sorting is and try to resolve it in this way

 function searchBinary(array, target){
 	var left = 0;
 	var right = array.length-1;
 	while(left <=right){
 		var mid = left + Math.floor((right-left)/2)
 		if(array[mid] == target){
 			return mid
 		}
 		if(array[mid] < target){
 			left = mid + 1
 		}else{
 			right = mid -1
 		}

 	}

 	return -1
 }











