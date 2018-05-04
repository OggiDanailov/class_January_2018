// write a method that finds and replaces all instances of "Oggi" in the text below with 'the teacher'. It should be 
// case insensitive

var text = ''

	function replace(text, word){
		var textArray = text.split(" ")
		for(let i = 0;i<textArray.length;i++){
			if(textArray[i] == word){
				textArray.splice(i, 1, "the teacher")
			}
		}
			console.log(textArray.join(" "))
		
	}



// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

function stringy(size) {
	var output = ""
	for (i =0; i < size; i++) {
		if(i%2 == 0) {
			output += 1
		} else {
			output += 0
		};
	};
	return output;
};

// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

function numToArray(int) {
  var str = int.toString();
  var rev = str.split("").reverse();
  var fin = rev.join("");
  return fin
}

// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?

function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
};

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014.
// to check the coupon, call out the function and put the date as a argument checkCoupon(year, month , date)
function checkCoupon(date) {
	
	var expiration = new Date("June 15, 2014");

	if (new Date(date) < expiration){
		return true
	}else {
		return false;
	}
};


// "Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning All characters between the first character and the @ (if any) must be letters, numbers, or underscores There must be an @ character (after the points listed just now) After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen The email must end with at least one set of a dot followed by one or more word characters. The input must NOT be case-sensitive The function should return true or false.


function emailcheck(email) {
	// check if there is a @ character in the email 
	if (email.indexOf('@') > -1)
	{
		console.log("@ found inside your_string");
		// test if the first part of email have either a non-number or number characters
		if (email.split("@")[0].match(/\D/g) != null)
		{
			console.log("your first part of email have either a non-number or number, ITS GOOD")
		}
		else 
		{
			console.log("your first part of email is NOT GOOD")
		}
		if (email.split("@")[1].indexOf('.') > -1) // check if there is a '.' in the second part
		{
			console.log("you have a . in your second part")
			if (email.split("@")[1].match(/\D/g) != null ) 
			{
				console.log("your second part of email have either a non-number or number, ITS GOOD")
			}
			else 
			{
				console.log("your second part of email is NOT GOOD")
			}
			
		}
		else
		{
			console.log("your second part of email doesnt have a dot")
		}
	}

	else
	{
		console.log("IT IS NOT EVEN AN EMAIL ")
	}


	
}




setTimeout(function () {
    $('.box').addClass('fadeIn')}, 4000
);







