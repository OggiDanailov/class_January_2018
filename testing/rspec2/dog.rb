class User
	attr_accessor :first_name, :last_name, :year
	def initialize(first_name, last_name, year)
		@first_name = first_name
		@last_name = last_name
		@year = year
	end

	def full_name
		@first_name + " " + @last_name
	end

	def age
		2018 - @year
	end
end

