require 'sinatra'
require 'sinatra/activerecord'

set :database, "sqlite3:myFirstDB.sqlite3"

require './models'


get '/' do 
	if params[:search] 
		@users = User.where(fav_food: params[:search])
	else	
		@users = User.all
	end
erb :index
end




