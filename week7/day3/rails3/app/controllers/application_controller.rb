class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
 
# Returns the current user
  def current_user
    @current_user = User.find_by_id(session[:user_id])
  end

  # Check if user is logged in
  def logged_in?
    current_user != nil
  end


 def authenticate
    if !logged_in?
      redirect_to root_path
    end
  end


end
