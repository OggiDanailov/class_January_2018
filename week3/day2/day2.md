add the sum: 

var obj = {
	name: 'torture exercise',
	miniObj: {
		name: 'Minitorture',
		array: [{
			numbers: [['a', 'b', 'c'], [1,2,3,4,5,6,7,8,9], 			['fun']]
		}]
	}

}

var sum = 0;
for(var i =0; i<obj.miniObj.array[0].numbers[1].length;i++){
sum += obj.miniObj.array[0].numbers[1][i]
}
console.log(sum)