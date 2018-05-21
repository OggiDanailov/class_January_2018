# SYMBOL vs Variable --------------- -------------------------
# puts 'hello' + ' ' + 'world'
# puts 'whatever' << ' you say'
 # puts :hello + " " + :world 

#  name = "oggi'
# name.object_id
# pen_name - 'oggi'
# pen_name.object_id
# Symbol
# a = :string
# b = :string
# a.object_id and b.object_id 

# True and False --------------- -------------------------

# if nil
# 	puts 'this is true'
# else 
# 	puts 'false'
# end 

# ------------------------Bang

# In general, methods that end in ! indicate that the method will modify 
# the object it's called on. Ruby calls these as "dangerous methods" 
# because they change state that someone else might have a reference to.
#  Here's a simple example for strings:

# foo = "A STRING"  # a string called foo
# foo.downcase!     # modifies foo itself
# puts foo          # prints modified foo


# foo = "A STRING"    # a string called foo
# bar = foo.downcase  # doesn't modify foo; returns a modified string
# puts foo            # prints unchanged foo
# puts bar            # prints newly created bar


# ruby hashes -  ----------------------------------------

# - SYMBOL
# car = {
# 	:name => 'toyota',
# 	:country => 'germany'
# }

# p car[:name]

# HASH LITERALS

# h = {color: "black", font: "Monaco"}
# p h[:color]

# car = {
# 	'name' => 'honda',
# 	'country' => 'Japan'
# }

# puts car['name']
# puts car.length


# car = {
# 	:name => "honda",
# 	:country => "Japan",
# 	:models => [1,2,3,4,5,6]
# } 

# puts car[:models][1]

# - CONSTRUCT A HASH
# car = Hash.new

# car[:name] = 'renault';
# car[:country] = 'France'

# puts car[:name]




# IF/ELSE statments  ---------------------------------------------
# puts "what is your name?"
# name = gets.chomp
# name2 = name.to_i
# if name == "oggi".capitalize || name == 'oggi'
# 		puts 'welcome Oggi'
# elsif  name2.class == Fixnum
# 		puts 'can not be a number'
# elsif name == " "
# 		puts 'can not be a blank'
# else
# 	puts ' this is a wrong name'
# end

# puts 'whats your name?'
# name = gets.chomp

# puts 'your name is ' << name

# puts 'give me a number'

# number = gets.chomp
# number2 = number.to_i


# if number2 > 10
# 	puts 'it is bigger than 10'
# elsif number2 < 10
# 	puts 'it is smaller than 10'
# else 
# 	puts 'the number is 10'
# end 

# UNLESS
# The unless statement provides an alternative mechanism to the if else construct.
# if i < 10
#    puts "Student failed"
# else
#    puts "Student passed"
# end


# unless i >= 10
#     puts "Student failed"
# else
#     puts "Student passed"
# end


# Loops   ---------------------------------------------

# FOR LOOP

# - interpolation - it works only with double quotes!
# for i in 0...4
# puts "the number #{i}"
# end

# array = ['oggi', 'doggi', 'boggi']

# for i in array
# 	puts "your name is #{i} " 
# end

# for i in 0..array.length-1
# 	puts array[i]
# end

#EACH LOOP

# array = ['oggi', 'doggi', 'boggi']

# array.each do |i|
# 	puts i
# end

# array.each_with_index do |name, index|
# 	puts "#{index}" + " " +  name
# end

# js
# array.forEach(function(item){
# 	console.log(item)
# 	})



#WHILE LOOP
# it runs until something is true

# number = 0

# while number < 10
# 	puts  "#{number} whatever"
# 	number += 1
# end

# UNTIL LOOP
# it runs until  a true condition is met.

# number = 0

# until number === 9
# 	puts 'a'
# 	number +=1
# end

# Methods   ---------------------------------------------


# def something
# 	puts 'whatever'
# end

# p something

# def adding(number)

# puts result = number + 4 
# end

# adding(3)







# Scope and instance variable - right now as instance variable @name is 
# accessible in naming; if it is not an instance variable name will be undefined

# @name = 4
# name = "oggi"

# def naming
# 	puts @name + 4
# end


# def whatever
# 	name = "George"
# 	puts name

# end

# naming()
# whatever()







# Homework   ---------------------------------------------
# 1. 
# def adding(x)
# 	puts x + ' only in America'
# end

# adding('hamburger')

# 2.
# array = [12, 23, -3, 43, -32]
# high = array[0]
# for i in array	
# 	if i > high
# 		high = i
# 	end 


# end
# puts high

# 3. 
# array1 = [:toyota, :bmw, :rolls_royce]
# array2 = ["corolla", "5-series", "phantom"]
#  # mapping = {} is a Hash

# def adding(array1, array2)
# 	mappings = {}
# 	array1.each_with_index do |car, index|
# 		puts mappings[car] = array2[index]
# 	end
# end

# adding(array1, array2)

# for i in 0..array1.length-1
# 	mappings = {}
# 	mappings[array1[i]] = array2[i]
# 	puts mappings
# end


# 4. 
# def fizzbuzz
# 	for i in 1...100
# 		if(i % 5 == 0 && i % 3 == 0)
# 			puts "FizzBuzz"
# 		elsif(i%3 == 0)
# 			puts 'Fizz'
# 		elsif(i%5 == 0)
# 			puts 'Buzz'
# 		else 
# 			puts i
# 		end	
# 	end
# end

# fizzbuzz()

# 5. 
# puts "what is your name?"
# name = gets.chomp
# name2 = name.to_i
# if name == "oggi".capitalize || name == 'oggi'
# 		puts 'welcome Oggi'
# elsif  name2.class == Fixnum
# 		puts 'can not be a number'
# elsif name == " "
# 		puts 'can not be a blank'
# else
# 	puts ' this is a wrong name'
# end


# 6.
# def penultime (str)
# 	answer = ''
# 	array = str.split(" ")
# 	answer =  array[-2].to_s + ".jpg"
# 	puts answer
# end

# string = "this is the whatever and music whatever"
# penultime(string)

# 7. 
text = "Today the boy woke up yearly; he left the house and went to school. There the boy studied math for couple of hours. The boy knew it will be hard but the boy didn't expect to be that hard. The boy felt that this field may not be promising. The boy decided to try a new career - a boyscout leader, lawyer, rapper or something similar."


def replacing(arg)
	# array = arg.split(" ")
	# array2 = ''
	# array.each do |word|
	# 	if word == 'boy'
			# array2 = array.join(" ")
			
	# 	end
	# end
	puts arg.gsub('boy', 'girl')
end

replacing(text)

# 8.

# def array_comp(array)
# 	ar1_sum = 0;
# 	ar2_sum = 0;
# 	array.each do |item|
# 		if(item %2 == 0)
# 			ar1_sum += item
# 		else
# 			ar2_sum +=item
# 		end
# 	end
# 	puts "the sum of all even is #{ar1_sum} and the sum of odds is #{ar2_sum}"
# end

# array_comp([1,4,3,6,5,7,6,4,5])

# 9. 

# def two_numbers(x, y)
# 	array1 = x.to_s.split("")
# 	array2 = y.to_s.split("")
# 	answer = ''
# 	array1.each do |ar1|
# 		array2.each do |ar2|
# 			if(ar1 == ar2)
# 				answer = true	
# 			end
# 		end
# 	end
# 	if(answer == true)
# 		puts true
# 	else 
# 		puts false
# 	end
# end

# two_numbers(354, 64)

# 10.

# def comma(string)
	
# 	array = string.split(" ")
# 	array.insert(-2, 'and')
# 	puts array
# end

# comma("Annie, John, George, James")

# 11. 

# def stringy(num)
# 	answer = ""
# 	for i in 1..num
# 		if(i%2 != 0)
# 			answer += '1'
# 		else
# 			answer += '0'
# 		end
# 	end
# puts answer
# end

# stringy(12)

# 13. Write recursive and non-recursive fibonacci sequence in Ruby

# recursive
# def fibo(n)
# 	if(n <= 1)
# 		return 1
# 	end		
# 	 fibo(n-1) + fibo(n-2)
	
# end

# puts fibo(9)
# non-recursive

# def fibo(num)
# 	x = 0
# 	y = 1
# 	sum = 0
# 	for i in 1..num
# 		sum = x+y
# 		x = y
# 		y = sum
# 	end
# 	return sum
# end

# puts fibo(10)









