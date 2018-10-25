require 'sinatra'


get '/'  do 
	erb :index
end

get '/about' do
	@name = 'Oggi'
	erb :about

end


get '/posts' do
@posts = ['my first post', 'my second post', 'my third post']

	erb :posts
end


get '/search' do
@search_term = params[:search]
p params
erb :search
end

get '/login'  do
	if params[:password] == '1234' && params[:username] == "ogidan@abv.bg"
		p params[:username]
		redirect '/profile'
	else
		erb :login
	end
end

get '/profile' do
	class Cookie
		def initialize(name, url)
			@name = name
			@url = url
		end

		def get_name
			return @name
		end

		def get_url
			return @url
		end
	end

	@c1 = Cookie.new('brownie', "https://us.123rf.com/450wm/bhofack2/bhofack21212/bhofack2121200057/16712714-fresh-homemade-chocolate-brownie-against-a-background.jpg?ver=6")


	erb :profile
end







