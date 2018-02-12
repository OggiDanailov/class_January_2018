require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:myDB.sqlite3'
enable :sessions

require './models'


get '/'  do

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


post '/profile' do
	user = User.find(session[:user_id])
	Blog.create(title: params[:title], category: params[:category], content: params[:content], user_id: user.id)

	redirect '/profile'
end























