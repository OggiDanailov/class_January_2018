require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:myFirstDB.sqlite3"

require './models'

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
	Blog.create(name: params[:name], content: params[:content], category: params[:category])
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









