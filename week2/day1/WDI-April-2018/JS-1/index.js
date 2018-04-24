// if/else statements are

// a = prompt('give me a number')

// if(a > 10){
// 	console.log('a is bigger than 10')

// }else if(a === 10) {
// 	console.log("a is 10!!!!")
// } else {
// 	console.log("a is smaller than 10")
// }

   // write a similar program to check if a string stored 
   // in a variable is the same as another string
// function nameGuess(){
// 	   var string = prompt('give us a name please')
// 	   var b = string.toLowerCase()
// 	   if(b === "adam"){
// 	   		console.log(b + " this is the name!!!")
// 	   }
// }

   // let otherName = "Oggi"

   // if(string == otherName){
   // 	console.log('the two names are the same')
   // } else {
   // 	console.log("the two names are different")
   // } 

   // otherName = "Samuel"

   // console.log(otherName)

  // Declare a function that, depending upon which virtual "door" 
  // was entered, tells the user they've received a different "prize" in an alert. Try running it 
  // after it has been declared a few times with each door option


// function doors(number){
// 	if(number == 1){
// 		console.log('you won a 1 prize')
// 	} else if(number == 2){
// 		console.log("you won a second prize")
// 	}else if(number == 3){
// 		console.log('you won 3$')
// 	}else {
// 		console.log('stop wasting my time')
// 	}

// }

// doors(2)

// function doors(){
// 	var number = prompt("give me a number from 1 to 3")
// 	if(number == 1){
// 		console.log("you won first prize")
// 	}else if(number == 2){
// 		console.log("you got the second one")
// 	}else if(number == 3){
// 		console.log("3 forever")
// 	}else {
// 		console.log("punch 1,2 or 3 you stupid!!")
// 	}

// }



// doors()

// var number = prompt('give me a number from 1 to 2')
// if(number == 1){
// 	win1()
// }else if(number == 2){
// 	win2()
// }else {
// 	lose()
// }

// function win1(){
// 	console.log('you won first prize')
// }

// function win2(){
// 	console.log('you won the second prize')
// }
// function lose(){
// 	console.log('you lost!!')
// }


// var array = ["a", "b", "c", "d", "e", "f"]
// var array2 = [1,2,3,4,5]
// var array3 = ["!", "%", "@"]
// Nested looping
// for(var i = 0;i<array.length;i++){	
// 	for(var j=0;j<array2.length; j++){
// 		for(var x =0;x<array3.length;x++){
// 			console.log(array[i] + " " + array2[j] + " " + array3[x])
// 		}
// 	}
// }

// console.log(array)

// For loop
// for(var i = 0; i < array.length; i++){
// 	console.log(array[i])
// }

// while loop

// x = 0;
// while(x < array.length){
// 	console.log(array[x]);
// 	x++;
// }
// Create a for loop or while loop that "sings" the classic song
//  "99 Bottles of Root Beer on the Wall"  
// . The code it outputs to the console should look similar to this:  
// •   "99 bottles of root beer on the wall, 99 bottles of 
// root beer...take one down, pass it around.......
// 98 bottles of root beer on the wall, 98 bottles of root beer 
// on the wall, 98 bottles of root beer...take one down, pass it around ......
// 97 bottles of root beer on the wall," etc., all the way to 0 bottles.

for(i=99;i>0;i--){
  if(i === 1){
    console.log("since there is one bottle left we need to make this is singular")
  }else {
  console.log(i + " bottles of root beer on the wall," + i + " bottles of root beer...take one down to " + (i-1) + ", pass it around.......")
  }
}














































