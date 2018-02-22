class UsersController < ApplicationController
  def index
  	@user = User.all
  end

  def new
  	@user = User.new
  end

  def create
  	user = User.new(user_params)
  	if user.save
  		redirect_to '/'
  	else
  		redirect_to '/users/new'
  	end
  end

  def edit
  	@user = User.find(params[:id])
  end

  def update
  	user = User.find_by_id(params[:id])
  	if user.update(user_params)
  	redirect_to '/'
  	else
  	redirect_to "/users/<%= user.id %>/edit" 
  end
  end



  private

  def user_params
  	params.require(:user).permit(:name, :password)
  end
end
