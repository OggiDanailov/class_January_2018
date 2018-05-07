Recursive function:

While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex or non-linear data structures.

One reason that recursion is favored in functional programming languages is that it allows for the construction of code that doesn’t require setting and maintaining state with local variables. Recursive functions are also naturally easy to test because they are easy to write in a pure manner, with a specific and consistent return value for any given input, and no side effects on external variable states.

function recursive(n){
	if(n === 0){
		return 0;
	}else {
		console.log(n)
}
	recursive(n-1)		
}

It will list the numbers from 10 to 0;