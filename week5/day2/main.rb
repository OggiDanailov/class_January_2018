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
# 	end

# 	def say_color
# 		puts "I am a car and my color is " +  @color
# 	end
# end

# cat = Animal.new('kitty', 'black')
# puts cat.say_color
# -------------------------------------------------
# ex. 5
# class Man
# 	def initialize(age)
# 		@age = age
# 	end

# 	def get_age
# 		puts @age
# 	end

# end

# oggi = Man.new(44)

# oggi.get_age
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
# p italian

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

# -------------------------------------------------
# ex. 13

# array = [1,2,3,4,5]
# print array.methods

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

obj = {
	first_name: 'Oggi',
	last_name: 'Danailov'
}

p obj.fetch(:last_name)
 obj.store(:country, 'bulgaria')
p obj

obj.each {|k, v|
	# puts v
	puts k
}

p obj.keys
p obj.values












