# Day 1 coding challenges:

# 1. Create a function that takes a string as an argument and adds the phrase "Only in America!" to the end of it
# 2. Create a function to find the maximum value in an array of numbers. For instance: [100,10,-1000] should return 100. Do not use Ruby's built-in .max function.

# 3. Create a function that takes two arguments - both of them arrays. Inside of the function, combine the arrays using the items from the first array as keys and the second array as values. For example, when these two arrays are supplied as arguments:

#     [:toyota, :tesla]
#     ["Prius", "Model S"]
# they should return a hash like so:

#     {toyota: "Prius", tesla: "Model S"}
# 4. Write a program that prints the numbers from 1 to 100, except:

# for multiples of three print "Fizz" instead of the number
# for multiples of five print "Buzz"
# Print "FizzBuzz" for numbers that are multiples of both 3 and 5.
# 5. Create a method that takes a string as an argument and checks if this string is a given name. The program should check if the argument is an empty string or it is a float/Integer too and tells the user that these are incorrect entries
# New Challenges

# 6.  write a function that takes a sentence as an argument and aways returns the penultimate word in it with 
# // .jpg attached to it.
# // Example:
# // "This is another day of my lovely life" - > lovely.jpg
# 7. Write a method that takes two arguments = a long string and a word and substitute all instances of a given word with the word you are passing. EX:
# // var text = "Today the boy woke up yearly; he left the house and went to school. There the boy studied math for couple of hours. The boy knew it will be hard but the boy didn't expect to be that hard. The boy felt that this field may not be promising. The boy decided to try a new career - a boyscout leader, lawyer, rapper or something similar."

# // you have to substitute all instances of 'boy' with 'girl'

# 8. Create a function that takes an array of numbers as an argument
# // and returns the sum of all of the Even and all of the Odd numbers
# 9. Create a function that takes 2 numbers as arguments. 
# // Return true if there is a digit that appears in both numbers.
# // Example: // sameDigit(5, 65) -> true // sameDigit(23, 82) -> true 
# // // sameDigit(85, 49) -> false
# // 854
# // '854'
# // ['8','5','4']
# 10. write a function that takes an array of names and returns a whole string of these names with comma and the word 'and' before the last name;
# ["John", "George", "James", "Anna"] ---> "John, George, James, and Anna";

# var names = ["Chris", "Oggi", "Emily"];

# 11.  write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. 
# // the string should start with a 1. a string with size 6 should return :'101010'. 
# // with size 4 should return : '1010'. with size 12 should return : '101010101010'. 
# // The size will always be positive and will only use whole numbers.
# 13. Write recursive and non-recursive fibonacci sequence in Ruby











#1. Write a function (try to use filter function in JS) that
 # fiters only the positive odd numbers from an array. For example,

# array = [1,2,3,-5,-6,-7,4] -> [1,3]

#  array = [1,2,3,-5,-6,-7,4]

# def odds(number)
# 	empty = []
# 	number.each do |ar|
# 		if ar > 0 && ar % 2 != 0
# 			empty.push(ar)
# 		end	
# 	end
# 	p empty
# end

# odds(array)


# 2.  def stringy(x)
#   result = x.split("")
#     result[-1]
#  end

#  stringy('something')

# 3. Given a list of strings, return a array where each string is replaced by 3 copies of the string concatenated together.
 
# copies3(["a", "bb", "ccc"]) → ["aaa", "bbbbbb", "ccccccccc"] 
# copies3(["24", "a", ""]) → ["242424", "aaa", ""] 
# copies3(["hello", "there"]) → ["hellohellohello", "theretherethere"]


# 4. Given a list of strings, return an array where each string has "y" added at its start and end.
 # moreY(["a", "b", "c"]) → ["yay", "yby", "ycy"] 
# moreY(["hello", "there"]) → ["yhelloy", "ytherey"] 
# moreY(["yay"]) → ["yyayy"]


# 5. Given an array of strings, return a hash containing a key for every different string in the array, always with the value 0. For example the string "hello" makes the pair "hello":0. Example:
#  word0(["a", "b", "a", "b"]) → {"a": 0, "b": 0} 
# word0(["a", "b", "a", "c", "b"]) → {"a": 0, "b": 0, "c": 0} 
# word0(["c", "b", "a"]) → {"a": 0, "b": 0, "c": 0}
# 6. Modify the hash and return as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.
#  mapAB2({"a": "aaa", "b": "aaa", "c": "cake"}) → {"c": "cake"} 
# mapAB2({"a": "aaa", "b": "bbb"}) → {"a": "aaa", "b": "bbb"} 
# mapAB2({"a": "aaa", "b": "bbb", "c": "aaa"}) → {"a": "aaa", "b": "bbb", "c": "aaa"}
  
# 7. Given an array of strings, return a hash with a key for each different string, with the value the number of times that string appears in the array.
#  wordCount(["a", "b", "a", "c", "b"]) → {"a": 2, "b": 2, "c": 1} 
# wordCount(["c", "b", "a"]) → {"a": 1, "b": 1, "c": 1} 
# wordCount(["c", "c", "c", "c"]) → {"c": 4}

# 8. Given an array of strings, return n array where each string has all its "x" removed.
#  noX(["ax", "bb", "cx"]) → ["a", "bb", "c"] 
# noX(["xxax", "xbxbx", "xxcx"]) → ["a", "bb", "c"] 
# noX(["x"]) → [""]
 
# 9. Given an array of strings, return an array of the strings, omitting any string length 4 or more.
#  noLong(["this", "not", "too", "long"]) → ["not", "too"] 
# noLong(["a", "bbb", "cccc"]) → ["a", "bbb"] 
# noLong(["cccc", "cccc", "cccc"]) → []
  
# 10. Given 3 integer values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
#  loneSum(1, 2, 3) → 6 
# loneSum(3, 2, 3) → 2 
# loneSum(3, 3, 3) → 0

# 11. Given a string, return a string where for every char in the original, there are two chars.
 # doubleChar("The") → "TThhee" # doubleChar("AAbb") → "AAAAbbbb" # doubleChar("Hi-There") → "HHii--TThheerree"
 
# 12. Given a string and an integer n, return a string made of n repetitions of the last n characters of the string.
#  repeatEnd("Hello", 3) → "llollollo" 
# repeatEnd("Hello", 2) → "lolo" 
# repeatEnd("Hello", 1) → "o"
  
# 13. Given a string, return the length of the largest "block" in the string. A block is a run of adjacent characters that are the same.
#  maxBlock("hoopla") → 2 
# maxBlock("abbCCCddBBBxx") → 3 
# maxBlock("") → 0


# 14. Using the Ruby language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 

# 15. Using the Ruby language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 
# def capit(arg)
# name = arg.split(" ")
# empty = []
# 	name.each do |x|
# 		empty.push(x.capitalize)
# 	end
# 	puts empty.join(" ")
# end

# capit('this is whatever and whatever')

#16. Write a method that compbines the nested arrays:

# names = [["Dostoyevsky", "Tolstoy", "Kafka", "Ecco"],["Idiot", "War and Peace", "Metamorphosis","The name of the Rose"],["Russia", "Russia", "Germany", "Italy"]]
# you should get [["Dostoyevsky", "Idiot", "Russia"], ["Tolstoy", ""War and Peace","Russia"], ["Kafka", "Metamorphosis", "Germany"], ['Ecco', "The name of the Rose", "Italy"]]

# def grouping(arg)
# 	obj = {}
# 	result = arg[0].zip(arg[1],arg[2])

# end

# p grouping(names)

# without zipping
# names = [["Dostoyevsky", "Tolstoy", "Kafka", "Ecco"],["Idiot", "War and Peace", "Metamorphosis","The name of the Rose"],["Russia", "Russia", "Germany", "Italy"]]

# def rearrange(nest)
# 	new_nest = []
# 	for i in 1..nest[0].length
# 		new_nest.push([])
# 	end
# 	nest.each do |array|
# 		array.each_with_index do |string, i|
# 			new_nest[i].push(string)
# 		end
# 	end
# 	print new_nest
# end

# rearrange(names)

 #17. Write a function (try to use filter function in JS) that fiters only the positive odd numbers from an array. For example,

# array = [1,2,3,-5,-6,-7,4] -> [1,3]

#  array = [1,2,3,-5,-6,-7,4]

# def odds(number)
# 	empty = []
# 	number.each do |ar|
# 		if ar > 0 && ar % 2 != 0
# 			empty.push(ar)
# 		end	
# 	end
# 	p empty
# end

# odds(array)


# 18. Create a method that takes an array of names and returns all the Vowels capitalized.
#  ex -> ['john', 'george', 'paul', 'ringo'] ->["jOhn", "gEOrgE", "pAUl", "rIngO"]


#  ruby
#  @array = [‘hello’,‘bye’,‘morning’]

#  def vowelCap(array)    
#  result = []  
#  array.each do |word|      
#   result << word.tr(‘aeiou’,‘AEIOU’)  
#  end  
#  print result end

#  vowelCap(@array)


# 19. write a method that finds all the numbers in an array that are divisible by three and then sort them in descending order (do not use sort()!!!!!)

# ex. [1,2,3,4,5,6,7,8,45,65,34,23,9] => [45, 9, 6, 3]

# def threes_down(array)
# 	holder = []
# 	for i in 0...array.length
# 		if array.max%3 == 0
# 			holder.push(array.max)
# 		end
# 		array.delete(array.max)
# 	end
# 	print holder
# 	puts " "
# 	# the puts is just add a "line break" basically, print looks so ugly in the terminal and i'm a BABY
# end

# threes_down([1,2,3,4,5,6,7,8,45,65,34,23,9])

















