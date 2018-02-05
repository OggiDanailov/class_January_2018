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


# ruby hashes -  ----------------------------------------

# - SYMBOL
# car = {
# 	:name => 'toyota',
# 	:country => 'germany'
# }

# HASH LITERALS

# car = {
# 	'name' => 'honda',
# 	'country' => 'Japan'
# }

# puts car['name']
# puts car.length

# - CONSTRUCT A HASH
# car = Hash.new

# car[:name] = 'renault';
# car[:country] = 'France'

# puts car[:name]

# - NAME

# car = {
# 	name: 'nissan',
# 	country: 'Japan'
# }
# puts car

# puts car[:name]


# IF/ELSE statments  ---------------------------------------------
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




# Homework   ---------------------------------------------
# def adding(x)
# 	puts x + ' only in America'
# end

# adding('hamburger')

# array = [12, 23, -3, 43, -32]
# high = array[0]
# for i in array	
# 	if i > high
# 		high = i
# 	end 


# end
# puts high


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


# scoping issue
# name = 'Oggi'

# def someting
# 	puts name
# end

# someting()






