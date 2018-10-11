<!-- A software development kit (SDK or devkit) is typically a set of software development tools that allows the creation of applications for a certain software package, software framework, hardware platform, computer system, video game console, operating system, or similar development platform. -->

link:
<!-- https://developers.soundcloud.com/docs/api/sdks#javascript -->
Promises:
https://www.youtube.com/watch?v=s6SH72uAn3Q

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.



Example of asynchornous behaviour:

function showSessionExpire(){
   console.log("Your session expired");
 }
setTimeout(showSessionExpire, 1000);
 console.log("showSessionExpire will execute after 1000 ms");


 Here first we will print the second console log and then the first console log although it will come first.
var a = 3;
var b = 4;

 var p = new Promise(function(resolve, reject){
 	if(a<4){
 	resolve('whatever and whatsoever')
 }else{
 	reject('this is not correct')
	}

})

p.then(function(value){
	console.log(value)
}).catch(function(value){
	console.log(value)
})

when Promise gets resolved it calls the then function; the value is what the resolve function passes;
then is called ONLY when the Promise gets resolved;
catch is called when the Promise does not get resolved.

var drinkWine = function(){
	var wine = true;
	return new Promise(function(resolve, reject){
	if(wine){
		resolve("I am drinking tons of wine")
	}else {
		reject("There is no wine")
	}
	
	})
}

var getDrunk = function(){
	return new Promise(function(resolve, reject){
		resolve("I am getting drunk")
	})
}

var notGettingDrunk = function(){
	return new Promise(function(resolve, reject){
		resolve("I am sober!!!!")
	})
}

drinkWine().then(function(result){
	console.log(result)
	return getDrunk()
}).catch(function(reject){
	console.log(reject)
	return notGettingDrunk()
})











