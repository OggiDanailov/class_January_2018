// var a = new RegExp();

// Regex:

// /([A-Z])\w+/g

// https://regex101.com/
// match, replace, search, and split methods of String.
// sequence of characters that forms a search pattern

// /\d/ - number - it will return the first number
// \D - matches not a digit
// (/\d/g) - numbers - it will return all the numbers
// (/\d+/g)  - will add numbers that are together 
// ^ - certian position in the beginning of the string
// $ - certian position in the end of the sting
// [a-z]{1,3}$ - it will match only 3 letters range
// [a-z]{4} - will match exact number
// \s - sapce
// \n new line
// \. - will search for dot
// . - any character
// [] - character set - includes more than one character
// ^[b]at - will not match bat
// ? - matches either one or nothing Mr\.? will match MR with or without .





// Regex - October 15, 2018

// var a = new Regex(123);
// var b = /123/

//  Some characters, such as
// question marks and plus signs, have special meanings in regular expressions and
// must be preceded by a backslash if they are meant to represent the character
// itself.
// let eighteenPlus = /eighteen\+/;

// Regex methods:
// test()

// regexObject.test( String )

// Executes the search for a match between a regular expression and a specified string. 
// Returns true or false.
// Use .test if you want a faster boolean check

// exec()

// String:
// match(); replace(); search(); split()

// /s/.test('string');
// /str/.test('string');

// console.log(/[0-9]/.test("when I arrived in the US in 2003"))
// here we have a range of numbers.  In a regular expression, putting a set
// of characters between square brackets makes that part of the expression match
// any of the characters between the brackets.
// Within square brackets, a hyphen (-) between two characters can be used
// to indicate a range of characters, where the ordering is determined by the
// character’s Unicode number. Characters 0 to 9 sit right next to each other in
// this ordering (codes 48 to 57), so [0-9] covers all of them and matches any
// digit.
// \d - any digit;
// \w - any word character;
// \s - any white space character (space, tab, newline)
// \D - any character that it is not a digit;
// \W - any character that it is not a word;
// \S - any character that it is not a white space;
// . - any character except for newline;


// var date = "01-feb-2018"
// (/\d\d-\w\w\w-\d\d\d\d/).test(date)

// ^ - To invert a set of characters—that is, to express that you want to match any
// character except the ones in the set—you can write a caret (^) character after
// the opening bracket.


// var a = /[^1-3]/

// a.test(456)
// true
// (there is no 1,2,3 and therefore the expression will be true);

// a.test(123)
// will give you false

// \d+ - When you put a plus sign (+) after something in a regular expression, it
// indicates that the element may be repeated more than once. Thus, /\d+/
// matches one or more digit characters.


// {} - To indicate that a pattern should occur a precise number of times, use braces.
// Putting {4} after an element, for example, requires it to occur exactly four
// times
// var a = "1234 Morning 123"
// var t = /\d{4}\s\w{3,10}\s\d{3}/
// t.test(a)
// true

// var b = "123 Morning 123"
// b.test(a)
// false

//i - insensitive

// Regular expressions also have an exec (execute) method that will
//  return null if no match was found and return an object with information 
//  about the match otherwise.

// var a = /\d+/.exec('this is number 23')
// a
// ["23", index: 15, input: "this is number 23", groups: undefined]

// try:
// var a = /is/.exec('this is number 23')
// var a = /[is]/.exec('this is number 23')
// var a = /[^is]/.exec('this is number 23')


// Regex match()

// string.match( RegExp )

// Used to retrieve the matches when matching a string against a regular expression. 
// Returns an array with the matches or null if there are none. You have to use g though for global

var string = 'This is the one lesson I have no idea what I am talking about';
var exp = /[A-Z]/;
console.log(string.match(exp))
// will return the first instance
// var exp2 = /[A-Z]/g
// will return all instances

// var string = 'this is the year of 2018'
// var exp = /[0-9]/g
// console.log(string.match(exp))





// Regex search()

// var string = 'This is the one lesson I have no idea what I am talking about';
// var exp = /[A-Z]/g;
// console.log(string.search(exp))
// // will return first position
// str.search(reg)
// We’ve seen this method already. It returns the position of the first match or -1 if none found:
// let str = "A drop of ink may make a million think";
// alert( str.search( /a/i ) ); // 0 (the first position)
// The important limitation: search always looks for the first match.

// We can’t find next positions using search, there’s just no syntax for that. 
// But there are other methods that can.


// Regex split()
// str.split(regexp|substr, limit)
// Splits the string using the regexp (or a substring) as a delimiter.

// We already used split with strings, like this:


// Regex replace()

// str.replace(str|reg, str|func)
// The swiss army knife for search and replace in strings.

// The simplest use – search and replace a substring, like this:

//  // replace a dash by a colon
// alert('12-34-56'.replace("-", ":")) // 12:34-56
// When the first argument of replace is a string, it only looks for the first match.

// To find all dashes, we need to use not the string "-", but a regexp /-/g, with an obligatory g flag:

 
 // replace all dashes by a colon
// alert( '12-34-56'.replace( /-/g, ":" ) )  // 12:34:56
// The second argument is a replacement string.


// var string = 'something 43'
// var a = string.replace(/\d+/g, "fourty three")
// console.log(a)

// var beat = 'George'

// var c = beat.replace(/[aeiou]/gi, function(beat){
// 	return beat.toUpperCase()
// } )
// console.log(c)



// Coding challenges:

// 1. write a method that takes a string and converts all instances of vowels capitalized;
var beat = 'George Harrison' => GEOrgE HArrIsOn

var c = beat.replace(/[aeiou]/gi, function(beat){
	return beat.toUpperCase()
} )
console.log(c)

2. write a method that takes the string below and changes all instances of "-" with forward slashes "/";
var date = "January-13-2018"

3. write a method that returns all instances of 'boy' and subistutes them with the word 'girl' using regular expression;
var sentence = "this is a story of a boy who got a degree in CS and become a famous professor. The boy never expected such
success in life. The boy's mother, however, always knew that this boy will succeed in life"
function whatever(x){
	var c = x.replace(/boy/g, 'girl')
	console.log(c)
}

4. write a method that finds all instances of numbers in a string, adds only the numbers higher than 10 together and returns the result.
var string = "beach: 24; something I spent yesterday was around 4$ but the day before that I think I spent around 13. Tonight I will
be going out so I should prepare at least 40; then the weekend I would say another 80; I wish the weekend could be 6-7"
function estimation(string){
	var result = 0;
	var temp = string.match(/\d+/g)
for(let i = 0;i<temp.length;i++){
	if(temp[i] > 10){
		result += parseInt(temp[i])
	}
}return result;
}

5. Using as much Regex as possible write a method that returns the number of each vowel in the sentence below:
var sentence = "Towards the end of November, during a thaw, at nine o’clock one morning, a train on the Warsaw and Petersburg
railway was approaching the latter city at full speed.The morning was so damp and misty that it was only with
great difficulty that the day succeeded in breaking; and it was impossible to distinguish anything more than a few
yards away from the carriage windows. Some of the passengers by this particular train were returning
from abroad; but the third-class carriages were the best filled, chiefly with insignificant persons of various occupations
and degrees, picked up at the different stations nearer town. All of them seemed weary, and most of them
had sleepy eyes and a shivering expression, while their complexions generally appeared to have taken on the colour of
the fog outside."

function vow(arg){
	var string = '';
	var vowels = arg.match(/[aeiou]/gi);
	for(let i = 0;i<vowels.length;i++){
		string += vowels[i]
	}
	var a = string.match(/a/gi)
	console.log("A is " + a.length);
	var e = string.match(/e/gi)
	console.log("E is " + e.length);
	var i = string.match(/i/gi)
	console.log("I is " + i.length);
	var o = string.match(/o/gi)
	console.log("O is " + o.length);
	var u = string.match(/u/gi)
	console.log("U is " + u.length)
}

6. write a test that checks if a certain password is correct. To be correct the password has to start with Capitalized letter,
followed by minimum 4 to 10 letters,  followed by some numbers(the number of digits does not matter), followed by 
2 or 3 letters.
var p = /^[A-Z]\w{4,10}\d+\w{2,3}$/
var a = "Something123abv"
















