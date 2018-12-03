// The big O

// Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
// The “O “in Big O stands for “order of”. And refers to the rate at which the function is growing.
// The ’n’ is a variable that represents the size of the input. The letter ’n’ is a commonly used variable in Big O, but you can also see other variables being used, like ‘m’ in O(n*m). Using a second variable like ‘m’ means that there is another input in the function that is separate from ’n’. An example of an input in JavaScript would be an array where ’n’ references the number of elements in the array.

// Logarithm
// x^y = n    			=>  Log(x)n = y;
// 2^ 3 = 8   			=>  Log(2)8 = 3

// This relates to Big O because if ‘n’ is fairly large and increases,
 // our result ‘y’ becomes marginally higher, increasing by a constant amount.
 //  Which means that as our input ‘n’ increases, the time for the algorithm to run 
 //  will increase at a constant amount rather than at the rate of the input. For example:

// Log(2)128 = 7;  if we double the input:
// Log(2)256 = 8
// our result increased by one although our input doubled


// 1. O(1)
// O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. This means that regardless of the amount or size of input, it will always take 1 unit of time to perform the algorithm.

// var array = [1,2,3,4,5,6,7,8]
// var empty = []
// for(let i  = 0;i<array.length;i++){
// 	empty.push(array[i])
// }

// 2. O(n)
// O(N) describes an algorithm whose performance will grow linearly and
 // in direct proportion to the size of the input data set. In this order,
 //  the worst case time (iterations) grows on par with the number of items.

// var array = [1,4,3,5,7,6,9]
// function finding(array, element){
// 	for(let i = 0;i<array.length;i++){
// 		if(element == array[i]){
// 			return i;
// 		}else {
		// 	return -1;
		// }
// 	}
// }

// 3. O( n²) - “Order N squared”
// As the input increases, the time to run the algorithm grows at the rate of it’s square.
 // This is frequently seen with nested ‘for loops’ because the inner loop will run ’n’ times 
 // for each time the outer loop runs. Which makes the resulting time complexity n*n or n².

// function findMatch(array){
// 	for(let i  = 0; i<array.length;i++){
// 		for(let j = i+1;j<array.length;j++){
// 			if(array[i] == array[j]){
// 				return true
// 			}
// 		}
// 	}return false
// }

// 4. O(2^n)
// For each additional input, the time to run the algorithm doubles. O(2^N) denotes
 // an algorithm whose growth doubles with each additon to the input data set.
 //  The growth curve of an O(2^N) function is exponential - starting off very shallow,
 //   then rising meteorically. An example of an O(2^N) function is the recursive calculation
 //    of Fibonacci numbers:

// function fibo(n){
// 	if(n <= 1){
// 		return n;
// 	}else {
// 		return fibo(n-2) + fibo(n-1)
// 	}
// }

// // 5. O(log N)
// Binary search -  a data set containing 100 items takes two seconds,
 // and a data set containing 1000 items will take three seconds.
 //  Doubling the size of the input data set has little effect on
 //   its growth as after a single iteration of the algorithm the data
 //    set will be halved and therefore on a par with an input data set half the size.
 //     This makes algorithms like binary search extremely efficient when dealing with
 //      large data sets.

// function search(array, target){
// 	var left = 0;
// 	var right = array.length-1
// 	while(left <= right){
// 		var mid = left +  Math.floor((right-left)/2)
// 		if(array[mid] == target){
// 			return mid
// 		}
// 		if(array[mid] < target){
// 			left = mid + 1;
// 		}else {
// 			right = mid - 1
// 		}
// 	}
// 		return -1
// }





