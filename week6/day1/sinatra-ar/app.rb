require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:textdb.sqlite3"

require './models'


get '/'  do 
	@blogs = Blog.all
	p params
	p params[:search]
	p params[:captures]

erb :index	
end

post '/new_blog' do  
	Blog.create(title: params[:title], category: params[:category], content: params[:content])
	redirect '/'
end



