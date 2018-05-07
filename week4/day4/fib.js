
function fibonacci(num) {
  if (num <= 1) return 1;
else {
return fibonacci(num - 1) + fibonacci(num - 2);
}

  
}



// without recursive

// function fibo(n){
// 	if(n<= 1){
// 		return n;
// 	}
// var x = 1;
// var y = 1;
// var temp = 0;
// for(let i = 2; i<n; i++){
// 	temp = x;
// 	x = x + y;
// 	y = temp;
// }
// 	return x;
// }


// Factorial without recursion

var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6));
// 720


function factorial(num){
	if(num == 0){
		return 1;
	}else {
		return (num * factorial(num - 1))
	}
};



// Tail Call Optimization
// One problem with contemporary implementations of JavaScript is that they don’t
//  have a standard way to prevent recursive functions from stacking up on themselves
//   indefinitely, and eating away at memory until they exceed the capacity of the engine.
//    JavaScript recursive functions need to keep track of where they were called from each time,
//     so they can resume at the correct point.

// In many functional languages, such as Haskell and Scheme, this is managed using a technique called tail 
// call optimization. With tail call optimization, each successive cycle in a recursive function would 
// take place immediately, instead of stacking up in memory.
// Theoretically, tail call optimization is part of the standard for ECMAScript 6,
//  currently the next version of JavaScript, however it has yet to be fully implemented by most platforms.







