class UsersController < ApplicationController

	def index
		@users = User.all
	end

	def new
		@user = User.new
	end

	def create
		user = User.new(user_params)
		if user.save
			    flash[:notice] = "Your account was created successfully."
			redirect_to '/'
		else 
			redirect_to new_user_path
		end
	end


	def show
	end



private

def user_params
	params.require(:user).permit(:name, :email, :password)
end




end