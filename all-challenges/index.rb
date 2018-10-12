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

















