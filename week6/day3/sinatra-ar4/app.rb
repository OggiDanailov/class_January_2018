require 'sinatra'
require 'sinatra/activerecord'
require './models'
require './database-config'



configure(:development){set :database, "sqlite3:blog.sqlite3"}
set :sessions, true

# def current_user
#   @user ||= User.find_by_id(session[:user_id])
# end

# def authenticate_user
#   redirect '/' if current_user.nil?
# end

# home page
get '/' do 
	@blogs = Blog.all 
	erb :index
end

# form for sign up
get '/users/new' do
  erb :"users/new"
end

# create (signup) user action
post '/create_users' do
	if params[:password] == '' || params[:username] == ''
		redirect '/users/new'
	else
	user = User.create(username: params[:username], password: params[:password])
	redirect "/users/#{user.id}"
	end
end


# form for sign in
get '/users/signin' do
erb :'users/signin'
end

# signin action
post '/signin' do
	if params[:username] == '' || params[:password] == ''
        redirect '/users/signin'
    elsif
    user = User.where(username: params[:username]).first
     user.password == params[:password]
        session[:user_id] = user.id      
        redirect "/users/#{user.id}"
     else
     	redirect "/users/signin"
    end    
end

# list all users and list all blogs
get '/users' do  
@users = User.all
erb :"users/index"
end

# user show route
get '/users/:id' do
  @user = User.find(params[:id])
  erb :'users/show'
end





# render edit form
get '/users/:id/edit' do	
	@user = User.find(session[:user_id]) 
		erb :"users/edit"	
end

# update action
post '/users/:id' do 	 
	@user = User.find(session[:user_id])
	@user.update(username: params[:username], password: params[:password])
	redirect '/'
end











# logout action
post "/logout" do
	session[:user_id] = nil
	redirect '/'
end

# the destroy user
post '/destroy_user' do 	
	user = User.find(session[:user_id])
	user.destroy
	redirect '/'
end

# create blog
post '/create_blog' do 
	if !session[:user_id]
		redirect "/"
	end
	user = User.find(session[:user_id])
	Blog.create(title: params[:title], content: params[:content], user_id: [user.id])
	redirect '/'
end

# blog show route
get '/blog/:id' do
# @user = User.find(session[:user_id])
  @blog = Blog.find(params[:id])

  erb :blog
end






