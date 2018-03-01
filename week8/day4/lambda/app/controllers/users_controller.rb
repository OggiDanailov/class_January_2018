class UsersController < ApplicationController

	def index
		@users = User.all
	end

	def create
		u = User.new(user_params)
		if u.save
			redirect_to root_path
			
		else
			render "users/new"
		end
	end

	def new
		@user = User.new
	end

	def show
	end


	private
	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
end
