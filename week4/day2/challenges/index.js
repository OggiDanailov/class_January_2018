// 1. Write a method that takes a string as an argument and returns the length of the string
// substituted by alternating #-#-#-.
// For example, var whatever = #-#-#-#-;

function dashing(string){
	var result = new String();
	for(let i =0;i<string.length;i++){
		if(i%2 == 0){
			result += "#";
		}else {
			result += "-"
		}
	}
	return result;
}

// 2. Write a method that arranges a given array with unordered numbers in consequent order.
// DO not use sort();

function sorting(array){
	var temp;
for(let i =0;i<array.length;i++){
	for(let j = 0;j<array.length;j++){
		if(array[j]>array[j+1]){
			temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
		}
	}
}return array;

}

// var array = [3,5,4,8,7,9] -> [3,4,5,7,8,9]

// 3. Write a method that gives you the corresponding Factorial:

// function factorial(4) - 24;
// function factorial(5) - 120;

// recursive:
function factorial(num){
	if(num == 0){
		return 1;
	}else {
		return (num * factorial(num-1));
	}
}

// non-recursive:

function factorial(x){
	var result = 1;
	for(let i = x; i> 0; i--){
		result *= i;
	}
	return result;	
}



// 4. Binary sorting - look into a sorted array whether there is a given number and return
//  the corresponding index; IF IT IS not there return -1


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






