finances = {
	budget: [
{car: 150,
gas: 50
},{
plane: 200,
airport: 30	
},{
hotel: 200,
services: 30	
},{
restaurants: 100,
bars: 50		
}],
	change: {
		Oggi: 254,
		Boro: 189,
		Spas: 332,
		George: 433,
		John: 300,
		Rad: 90
	}

}

// write a method that takes the object and estimates how much each employee has spent on business trip given
// that change is what the employee returned to the office and the budget was what it was the allowence. If an employee(s) spend
// less than 70% of the allowence return him(them) into an array since they will get a promotion

function estimate(obj){
	var array = [];
	var mergedArray = [];
	var expenses = 0;
	
	for(let i = 0;i<obj.budget.length;i++){
		array.push(Object.values(obj.budget[i]))
	}	
	for(let i =0;i<array.length;i++){
		for(let j = 0;j<array[i].length;j++){
			mergedArray.push(array[i][j])
		}
	}
	expenses = mergedArray.reduce(function(a,b){
		return a + b;
	})
	results(obj, expenses)
}

function results(object, expenses){
	
	var objResult = {}
	for(let i=0;i<Object.keys(object.change).length;i++){
	objResult[Object.keys(object.change)[i]] = (expenses - Object.values(object.change)[i] )
	}
	// console.log(objResult)
	promotion(expenses, objResult)
}

function promotion(expenses, obj){
	var bar = 0;
	var temp = (70*expenses)/100
	var bar = expenses-temp;
	console.log(bar)
	console.log(obj)
}


estimate(finances)






