var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

var add = document.getElementById("add")
var divide = document.getElementById("divide")
var multiply = document.getElementById("multiply")
var subtract = document.getElementById("subtract")
var clear = document.getElementById('clear')

var result = document.getElementById('result')
clear.addEventListener("click", function() {
	num1.value = "0"
	num2.value = "0"
})

add.addEventListener("click", function(){
	var answer = parseInt(num1.value) + parseInt(num2.value)
		result.innerHTML = answer
		changeColor(answer)
})

subtract.addEventListener("click", function(){
	var answer = parseInt(num1.value) - parseInt(num2.value)
		result.innerHTML = answer
		changeColor(answer)
})

function changeColor(x){
	if(x == 0){
		result.style.backgroundColor = 'green'
	}else if (x % 2 == 0){
		result.style.backgroundColor = 'red'
	}else {
		result.style.backgroundColor = 'yellow'
	}
}

// var a = 8;

// function whatever(){
// 	a = 10;
// 	console.log(a)
// }


// console.log(a)

// difference between let and var
// if within the if block we use let c variable will be availalbe only within this block.
// 	It means that if we call the function we will get the global value of 10.
// if we change to var c within the if block then var will be available outside the if 
// 	statement; the function will print 2

// var c = 10; 
// // global variable


// function hey(){

// 	if(true){
// 		let c = 2;
// 	}
// 	console.log(c)
// }

// Currently the two nested for loops behave in correct way; in the inner for loop
// since we are using let i is available only within the inner for loop;
// In this scenario JS does not mix the two i values


// for(let i = 0;i< 3;i++){
// 	console.log(i)
// 	for(let i = 111; i<113;i++){
// 		console.log(i)
// 	}
// }


























