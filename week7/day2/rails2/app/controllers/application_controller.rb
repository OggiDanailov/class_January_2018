class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

def current_user
    @current_user ||= User.find_by_id(session[:user_id])
    # This Operator only sets the variable if the variable is false or Nil.
  end

  helper_method :current_user, :logged_in?
  # here these two methods become available in the view

  def logged_in?
    current_user != nil
  end

  def authenticate
    redirect_to '/signup' if !logged_in?
  end
end
