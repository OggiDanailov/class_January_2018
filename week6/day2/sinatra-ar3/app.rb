require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:myDB.sqlite3'
# enable :sessions
set :sessions, true

require './models'

# getting only the blogs created by a given user
# get '/'  do   
# # @user = User.find(1)
# # @blogs = Blog.where(user_id: @user)

# erb :index
# end

# home page - the sign in page
get '/' do

erb :loginu
end

# the signin action that checks if a given user exists
post '/login' do
	user = User.where(username: params[:username]).first
	if user.password == params[:password]
		session[:user_id] = user.id
		redirect '/profile'
	else 
		redirect '/'
	end
end

# it prints all the blogs associated with this user
get '/profile' do
	@user = User.find(session[:user_id])
	@blogs = @user.blogs
erb :index
end


# it creates a blog 
post '/create_blog' do
@user = User.find(session[:user_id])
@title = params[:title]
@content = params[:content]
@category = params[:category]
 if Blog.create(title: @title, content: @content, category: @category, user_id: @user.id )
 	redirect '/'
 else
 	redirect '/profile'
 end
end

# it gets each separate blog
get '/blog/:id' do  
	@blog = Blog.find(params[:id])
erb :blog		
end


#renders the edit form for the user
get '/users/:id/edit' do
  @user = User.find(params[:id])
  erb :edit
end



# the udpate action from edit form
post '/update' do
user = User.find(session[:user_id])
user.update(username: params[:username], password: params[:password])
redirect '/'
end


# the destroy action from the edit form
post '/destroy_user' do 
	user = User.find(session[:user_id])
	user.destroy

	redirect '/'
end





















