1. Write a function that takes three arguments - all numbers - adds them together, split the result in 3 and displays the result on the console.

2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log("Sorry, no 3-divisible numbers")

3. Create a function that takes a string of numbers as an argument, converts it into an array and pushes this  in an empty array. Then it lists all items of this array. Google how to push an item in an empty array!!!

4. Create 4 boxes that have the same size but different colors.
In these boxes (or next to them) create 4 buttons.
When you click each button you get the corresponding box's color printed in the console.
put the colors in an array. You have to use for loop for both the buttons and the colors in the array.

5. Create a function that takes a string as an argument and checks if this string is a palindrome.


Plan for the day:

- homeworks to be discussed and done on the board;
	- going over keypress events;
	- going over the importance of splitting the functionality (the example of checking the validation of No. 4)
- the above coding challenges
- create palindrome (split(), reverse(), join())
- calculator to create from scratch
- merging the two homeworks  - clock and modal and start working on them if there is time;

Plan for the next day:

1. write a function that takes three arguments - numbers - adds them together and returns true if the sum of these numbers is even and false if the sum of these numbers is odd;

2. Write a function that takes a string and returns an array of all vowels in this string;

3. Write a function that takes an array of numbers and returns the sum of all numbers

- calculator to create from scratch

- going over:
	- callback function;
		A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’. They are passed as arguments to another function;

				function hello(){
					console.log('hello')
				}
				function world(){
					console.log('world')
				}
				hello()
				world()

			Written in this way, you will print 'hello' and 'world' one after another on the screen.
			However, if you wrap console.log('hello') in a settimeout it won't print it in the same order.
				function hello(arg){
					setTimeout(function(){
						console.log(arg)
					}, 3000)

				}

				function world(){
					console.log('this is the world')
				}
			
			JavaScript didn’t wait for a response from hello() before moving on to execute world(). JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.


	- function expression;
		var a = function(){
			return 3.14
		}




