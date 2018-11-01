require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:myFirstDB.sqlite3"
require './models'
set :sessions, true

def current_user
	if session[:user_id]
		@current_user = User.find(session[:user_id])
	end
end

def current_blog
	@blog = Blog.find(params[:id])
end

get '/' do 
	if params[:search] 
		@blogs = Blog.where(category: params[:search])
	else	
		@blogs = Blog.all
	end	
erb :index
end

get "/new" do 
	erb :new
end


post '/new_blog' do
	if !session[:user_id]
		redirect "/"
	end
	user = User.find(session[:user_id])
	Blog.create(name: params[:name], content: params[:content], category: params[:category], user_id: user.id)
	redirect "/"
end

get "/blogs/:id" do
	current_blog
	erb :show
end

get "/blogs/:id/edit" do
	current_blog
	erb :edit
end

post "/update/:id" do
	current_blog
	if @blog.update(name: params[:name], content: params[:content], category: params[:category])
		redirect "/"
	else 
		render "/blogs/<%= blog.id %>/edit"	
	end
end

post "/destroy/:id" do
	current_blog
	if @blog.destroy
		redirect "/"
	end
end

# users

post "/signup" do 
	username = params[:username]
	password = params[:password]
	u = User.new(username: username, password: password)
	if u.save
		redirect "/new"
	else
		render :index
	end
end


post "/signin" do
	u = User.where(username: params[:username]).first
		if u.password == params[:password]
			session[:user_id] = u.id
			redirect "/users/#{u.id}"
		else
			render "/"
		end		
end


get "/users/:id" do
	@user = User.find(params[:id])
	erb :user 
end








