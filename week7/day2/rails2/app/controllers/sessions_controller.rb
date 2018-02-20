class SessionsController < ApplicationController
  def new
    redirect_to '/', notice: 'You are already logged in' if logged_in?

  end


  def create
  	@user = User.find_by_email(params[:email])
  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    flash[:message] = 'succesfully logged in!'
    redirect_to '/'
  else
  	flash[:error] = 'please try again!'
    redirect_to '/signin', notice: 'Username unknown or password.'
  end
  end

  def destroy
  	session[:user_id] = nil
  	flash[:message] = 'succesfully logged out'
  	redirect_to '/'
  end
end







