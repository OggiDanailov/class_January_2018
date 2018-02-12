require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:myFirstDB.sqlite3"

require './models'


get '/' do 
	if params[:search] 
		@blogs = Blog.where(category: params[:search])
	else	
		@blogs = Blog.all
	end
erb :index
end


post '/new_blog' do
	Blog.create(name: params[:name], content: params[:content], category: params[:category])
	redirect "/"
end