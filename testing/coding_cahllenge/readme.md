 array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

 1. write a method in ruby that takes the array and returns all odd numbers as 
alternating characters => $ %
ex =>
array = ["$",2,"%",4,"$",6,"%",8,"$",10,"%",12,"$",14,"%",16,"$",18,"%",20]

2. write a test in Rspec that makes sure that your return value is correct.


JS decision:


function alternating_array(array){
	for(let i = 0;i<array.length;i++){
		if(array[i] % 2 !== 0){
			array[i] = "$"
		}
	}
	whatever(array)
}

function whatever(x){
		ar1 = []
		result = []
		ar3 = []
		
	for(let i=0;i<x.length;i++){
		if(x[i] % 2 == 0){
		ar3.push(x[i])
		}else {
		ar1.push(x[i])
		}
	}
	for(let i = 0;i<ar1.length;i++){
		if(i % 2 !== 0){
			ar1[i] = "%"
		}
		result.push(ar1[i])
		result.push(ar3[i])
	}
	console.log(result)
}




















}