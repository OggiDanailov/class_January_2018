class UsersController < ApplicationController
  def index
  	@users = User.all
  end



  def new
  	@user = User.new
  end
  

  def create
  	u = User.new(user_params)
  	if u.save
  		redirect_to "/"
  	else render "/users/new"
  	end
  end



  private

  def user_params
  	params.require(:user).permit(:username, :password, :password_confiration, :class_name)
  end
end
