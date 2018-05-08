
function fibonacci(num) {
  if (num <= 1) return 1;
else {
return fibonacci(num - 1) + fibonacci(num - 2);
}

  
}



// without recursive

// Anthony
// function fib(x){
// var a=0
// var b= 1

// for(let i=0; i<x-2; i++){
// var c = a + b
// a=b
// b=c

//  }
//  return c
// }

// Bridgit

// Write a fibonacci sequence function without using recursion

// fibonacci is number plus previous number: 0 1 1 2 3 5 8 13 21...

// function fibonacci (range) {
//   var many = Math.floor(range/2);
//   var place = 0;
//   var set = 1;
//   for (i=0;i<many;i++) {
//     console.log(place);
//     set+= place;
//     console.log(set);
//     place += set;
//   }
//   if (range%2 != 0) {
//     console.log(place)
//   }
// }

// fibonacci(9);



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

function factorial(n){
    var result = 1;
    
    for(let i = n; i > 1; i--){
        result *= i;
    }

    console.log(result);
}
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







