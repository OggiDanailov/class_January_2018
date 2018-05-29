require 'sinatra'
require 'sinatra/activerecord'
require './models'

set :database, "sqlite3:blog.sqlite3"
set :sessions, true

def current_user
	if session[:user_id]
		@current_user = User.find(session[:user_id])
	end	
end


# signup
get "/users/new" do 
erb :"users/signup"
end

post "/signup" do 
	User.create(username: params[:username], password: params[:password])
	redirect "/"
end

# login

get "/login" do 
erb :"users/login"
end

post "/login" do 
	if user = User.where(username: params[:username]).first
		if user.password == params[:password]
			session[:user_id] = user.id 
			redirect "/"
		else 
			redirect "/users/new"
		end
	else 
		redirect "/users/new"
	end
end

# logout

post "/logout" do	
	session[:user_id] = nil
	redirect "/"

end


# list all users(index)
get  "/" do 
	@users = User.all

	erb :"users/index"	
end

# create_blog

get "/blogs/new" do
	erb:"blogs/new"
end

post '/create_blog' do
	if !session[:user_id]
		redirect "/"
	else
		user = User.find(session[:user_id])
		Blog.create(title: params[:title], content: params[:content], user_id: user.id)
		redirect "blogs"
	end

end

# list all blogs

get "/blogs" do 
@blogs = Blog.all
erb :"blogs/index"
end


























