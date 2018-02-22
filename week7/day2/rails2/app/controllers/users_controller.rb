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


	def signin
    	@user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:message] = 'succesfully logged in!'
      redirect_to '/'
    else
    	flash[:message] = 'please try again!'
      redirect_to '/signin'
    end
  end



private

def user_params
	params.require(:user).permit(:name, :email, :password)
end




end