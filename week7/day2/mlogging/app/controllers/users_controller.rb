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
  		redirect_to "/"
  	else
  		render "/users/new"
  	end
  end


  def signin
      @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:message] = 'succesfully logged in!'
      redirect_to '/'
    else
      flash[:message] = 'please try again!'
      redirect_to '/signin'
    end

  end

  def show
  	@user = User.find(params[:id])
  end

 

  def edit
  	@user = User.find(params[:id])
  end

  def update
  	user = User.find(params[:id])
  	if user.update(user_params)
  		redirect_to "/"
  	else 
  		render edit_user_path
  	end
  end

  def destroy
  	user = User.find(params[:id])
  	user.destroy
  		redirect_to "/"
  end


  private
  def user_params
  	params.require(:user).permit(:username, :password)
  end



end
