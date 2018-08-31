class TestsController < ApplicationController

	def index
		@tests = Test.all
	end

	def new
		@test = Test.new

	end

	def create
		test = Test.new(test_params)
		if test.save
			redirect_to "/tests/#{test.id}"
		else
			render "/tests/new"
		end
	end

	def show
		@test = Test.find(params[:id])
	end

	def guess
			if(params[:answer] == params[:correct_answer])
				puts 'correct'
				redirect_to '/'
			else
				puts 'incorrect'
			end 
	end


	private 

	def test_params
		params.require(:test).permit(:question, :answer1, :answer2, :answer3, :answer4, :correct_answer)
	end
end
