require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:myDB.sqlite3'
# enable :sessions
set :sessions, true

require './models'


# get '/'  do   
# # @user = User.find(1)
# # @blogs = Blog.where(user_id: @user)

# erb :index
# end
get '/' do

erb :login
end


post '/login' do
	user = User.where(username: params[:username]).first
	if user.password == params[:password]
		session[:user_id] = user.id
		redirect '/profile'
	else 
		redirect '/'
	end
end


get '/profile' do
	@user = User.find(session[:user_id])
	@blogs = @user.blogs
erb :index
end

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

























