class UsersController < ApplicationController
  def index
  	@users = User.all
  end

  def new
  	@user = User.new
    @job = ["buyer", 'seller']
  end

  def show
    @user = User.find(params[:id])
  end

  def create
  	user = User.new(user_params)
  	if user.save && params[:user][:status] == "buyer"
  		redirect_to users_path
    elsif user.save && params[:user][:status] == 'seller'
        redirect_to user_path(user)
  	else 
  		render new_user_path
  	end

  end


  private

  def user_params
  	params.require(:user).permit(:name, :password, :status)
  end
end
