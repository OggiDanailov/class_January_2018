class SessionsController < ApplicationController
  
  def new
    # redirect_to '/', notice: 'You are already logged in' if logged_in?
    @user = User.new
  end


  def create
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

  def destroy
  	session[:user_id] = nil
  	flash[:message] = 'succesfully logged out'
  	redirect_to '/'
  end
end







