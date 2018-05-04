function fibonacci(num) {
  if (num <= 1) return 1;
else {
return fibonacci(num - 1) + fibonacci(num - 2);
}

  
}



// without recursive

function fibo(n){
	if(n<= 1){
		return n;
	}
var x = 1;
var y = 1;
var temp = 0;
for(let i = 2; i<n; i++){
	temp = x;
	x = x + y;
	y = temp;
}
	return x;
}