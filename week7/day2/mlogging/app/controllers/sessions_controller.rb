class SessionsController < ApplicationController

  def new
  end


def destroy
  
  session[:user_id] = nil
  flash[:message] = 'succesfully logged out'
    redirect_to '/'
end


end
