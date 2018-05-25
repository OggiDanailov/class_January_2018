require 'sinatra'
require 'sinatra/activerecord'

set :database, 'sqlite3:myDB.sqlite3'
enable :sessions
require './models'


get "/"  do 
	erb :index	
end

get '/users' do
	@users = User.all
	erb :users
end

get '/users/:id' do
	@user = User.find_by_id(params[:id])
	erb :show
end

get "/users/:id/edit" do
@user = User.find(params[:id])
erb :edit
end

post '/edit/:id' do 	 
	@user = User.find(params[:id])
	@user.update(username: params[:username], password: params[:password])
	redirect '/users'
end

post "/destroy/:id" do
	@user = User.find(params[:id])
	@user.destroy
		redirect "/users"

end




post "/login" do 
	username = params[:username]
	password = params[:password]
	u = User.new(username: username, password: password)
	if u.save 
		redirect "/users"
	else
		erb :index
	end
end





