# Coding challenge in JS:

# 1. Create a new object called car with function constructor that takes couple of arguments:
# brand, country, year of production, model and price.
# also, create two methods - the first method should return the age of the car;
# the second method should return the price of the car converted into euro
# Finally, create two instances of the new object

# function Car(brand, country, year, model, price){
# 	this.brand = brand;
# 	this.country = country;
# 	this.year = year;
# 	this.model = model;
# 	this.price = price;

# 	this.age = function(){
# 		return 'this car is ' + (2018 - this.year) + " old"
# 	}

# 	this.euPrice = function(){
# 		return this.price * 0.85 + " in Euro"
# 	}
# }

# 2. Create the same object but as a class in JS 

# class Car{
# 	constructor(brand, country, year, model, price){
# 		this.brand = brand;
# 		this.country = country;
# 		this.year = year;
# 		this.model = model;
# 		this.price = price;
# 	}

# 	age(){
# 		return 'this car is ' + 2018 - this.year + " old"
# 	}
# 	euPrice(){
# 		return this.price * 0.85 + " in Euro"
# 	}

# }

# var car1 = new Car('toyota', 'japan', 2016, 'camry', 26000)

	

# ex1. 
# Constructor Function in JS

# function Car(brand, country){
# 	this.brand = brand;
# 	this.country = country
# }

# var myCar = new Car('toyota', 'Japan')

# -------------------------------------------------

# ex2
# Class in JS

# class Car{
# 	constructor(brand, country){
# 		this.brand = brand;
# 		this.country = country
# 	}
# }

# var newCar = new Car('nissan', "japan")

# -------------------------------------------------

# class W
# 	def something
# 		puts 'sdfasd'
# 	end
# end

# w = W.new

# w.something()

# ex3.
# Class in Ruby

# class Animal
# 	def initialize
# 		puts 'roaaaarrr'
# 	end

# end

# dog = Animal.new
# puts dog
# -------------------------------------------------

# ex4. 
# Instance variable

# class Animal
# 	def initialize(name, color)
# 		@name = name
# 		@color = color
# 		# age = 23
# 	end

# 	def say_color
# 		puts "I am a car and my color is " +  @color
# 		# puts age
# 	end
# end

# cat = Animal.new('kitty', 'black')
# puts cat.say_color


# -------------------------------------------------
# ex. 5
# JS
# class Man{
# 	constructor(age){
# 	this.age = age;

# 	}
# }
# oggi = new Man(44)


# class Man
# 	# attr_reader :age
# 	def initialize(age)
# 		@age = age
# 	end

# 	def get_age
# 		puts @age
# 	end

# end

# oggi = Man.new(44)

# oggi.get_age()
# puts oggi.age

# -------------------------------------------------
# ex. 6
# class Man
# 	def initialize(age)
# 		@age = age
# 	end

# 	def get_age
# 		puts @age
# 	end

# 	def set_age=(age)
# 		@age = age
# 	end

# end

# oggi = Man.new(44)
# oggi.get_age
# oggi.set_age = 32
# oggi.get_age

# -------------------------------------------------

# ex. 7
# class Man
# 	attr_reader :name
# 	def initialize(name, age)
# 		@name = name
# 		@age = age
# 	end


# end
# bulgarian = Man.new('Oggi', 44)
# puts bulgarian.name
# puts bulgarian.age

# -------------------------------------------------

# ex. 8

# class Man
# 	attr_reader :name
# 	attr_writer :name
# 	def initialize(name, age)
# 		@name = name
# 		@age = age
# 	end
# end

# serbian = Man.new('Uros', 33)
# puts serbian.name
# puts serbian.name = 'Goran'
# puts serbian.name

# -------------------------------------------------

# ex. 9

# class Man
# 	attr_accessor :name, :age
# 	def initialize(name, age)
# 		@name = name
# 		@age = age
# 	end
# end


# french = Man.new('Henry', 44)
# p french.name
# p french.age
# p french.name = 'Dorian'
# p french.name
# p french.age = 11
# p french.age

# -------------------------------------------------
# ex. 10

# class Animal
# 	attr_accessor :legs
# end

# class Man < Animal
# 	attr_accessor :name
# 	def initialize(name)
# 		@name = name
# 	end

# end

# canadian = Man.new('John')
# puts canadian.name
# puts canadian.legs = 2
# puts canadian.legs


# -------------------------------------------------
# ex. 11

# class Animal
# 	def initialize(weight)
# 		@weight = weight
# 	end	
# end

# class Man < Animal
# 	def initialize(weight, name)
# 		super(weight)
# 		@name = name
# 	end
# end


# italian = Man.new(99, "Mario")
# p italian.weight

# -------------------------------------------------

# ex. 12

# class Mammal
# 	def roar
# 		'wooooow'
# 	end
# end


# class Cat < Mammal
# 	def roar
# 		super +	' mewouw'
# 	end
# end

# mu = Cat.new
# p mu.roar



# Ruby variables
# last - is variable
# will be available through the block
# @ -instance variable - available for the instance of the object; it is available thorughout all the 
# class methods
# @@ - class variable - availalbe through all the class
# $ - global variable - avaiable throughout the whole script from class to class

# $zodiac = "animal"
# class Whatever
# 	@@age = 23
# 	def initialize
# 		@name = "Oggi"
# 	end

# 	def something
# 		last = 'Danailov'
# 		puts "#{@name} #{last} #{@@age}"	
# 	end

# 	def change
# 		@@age += 1
# 		@name = "Boro"
# 		puts @@age
# 		puts @name
# 		puts $zodiac
# 	end

# end

# w = Whatever.new

# puts w.change()



# NB. difference between Procs and Lambdas:
# Lambdas check the number of arguments, while procs do not






# -------------------------------------------------
# ex. 13

# array = [1,2,3,4,5]
# puts array.methods

# -------------------------------------------------
# ex. 14

# puts 'WhatWatWhat'.gsub(/[aeiou]/, 'x')
# -------------------------------------------------
# ex. 15  - map

# array = [1,2,3,4]
# p array.map {|e| e + 3  }
# -------------------------------------------------
# ex. 16 - zip

# array = [1,2,3,4]
# p array.zip([9,8,7,6])
# -------------------------------------------------

# ex. 17 - fetch

# obj = {
# 	first_name: 'Oggi',
# 	last_name: 'Danailov'
# }

# p obj.fetch(:last_name)
#  obj.store(:country, 'bulgaria')
# p obj

# obj.each {|k, v|
# 	# puts v
# 	puts k
# }

# p obj.keys
# p obj.values


# Elevator

# class Elevator
# 	attr_accessor :floor
# 	def initialize
# 		@floor = 1
# 	end

# 	def go_up
# 		if(@floor == 12)
# 			@floor = 12
# 			puts "you cannot go up; this is the last floor"
# 		end
# 		@floor += 1
# 	end

# 	def go_down
# 		if(@floor == 1)
# 			@floor = 1
# 			puts "you are on floor 1; you have to go up or out"
# 		end
# 		@floor -= 1
# 	end

# 	def cheery_greeting
# 		puts "currenty we are on #{@floor}"
# 	end

# end	

# elevator = Elevator.new()

# puts elevator.cheery_greeting
# puts elevator.go_up
# puts elevator.cheery_greeting
# puts elevator.go_up
# puts elevator.go_up
# puts elevator.cheery_greeting












