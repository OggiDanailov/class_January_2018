// 1. write a method that finds the lowest number in an array; do not use sort();

// 2. write a method that uses sort() and arranges given array of numbers in ascending order

// 3. write a function that takes two arguments - an array and a target number;
// the function checks if the target number is in the array and returns the corresponding index of this number in the array;
// if not, returns -1
// a) google what linear sorting is and try to do it in this way
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

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


var array  = [1,2,3,4,5,6,7,8,9]



// 2. sort()

// If a-b is less than 0,  a comes first.
// If a-b returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
// If a-b is greater than 0,  i.e. b comes first.

array = [2,3,4,6,5,8,7,9]

array.sort(function(a,b){
	return a-b
})


