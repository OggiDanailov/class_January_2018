Relation Database:
http://guides.rubyonrails.org/association_basics.html#choosing-between-has-many-through-and-has-and-belongs-to-many


Coding challenges:
function closestToZero(x, y) {
    function abs(x) {
        if(x > 0) {
            return x;
        } else {
            return -x;
        }
    }

    if(abs(x) < abs(y)) {
        return x;
    } else {
        return y;
    }
}
console.log("2: " + closestToZero(2, 3));
console.log("-5: " + closestToZero(-5, 6));
console.log("-1: " + closestToZero(-1, -1));

// Level 0.8

// Write a function that takes in an array of strings and returns all of them
// concatenated together. You may not use any String functions.
// example:
// ["abra", "cadabra"] returns "abracadabra"
// ["a", "b", "c"] returns "abc"

function stringConcat2(array) {
	var result = "";
	for(var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}
console.log(stringConcat2(["abra", "cadabra"]));
console.log(stringConcat2(["a", "b", "c"]));


// create a function that takes in two strings and prints out the first letter in each of them.

// examples:
// "happy", "face" ---> "hf"
// "abra", "cadabra" ---> "ac"