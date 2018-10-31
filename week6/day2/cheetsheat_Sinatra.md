s
CheatSheet
- touch Gemfile Rakefile app.rb models.rb
- mkdir views public
1. Gemfile
	- source 'https://www.rubygems.org'  
	- gem 'sinatra'  
	- gem 'sinatra-activerecord'  
	- gem 'sqlite3'  
	- gem 'rake'  
2. Rakefile  
	- require 'sinatra/activerecord/rake'  
	- require './app'  
3. app.rb  
	- require 'sinatra'  
	- require 'sinatra/activerecord'  
	- set :database, 'sqlite3:whatever.sqlite3'  
	- require './models'c  
4. Terminal
	- bundle install  
	- rake db:create_migration NAME=create_blogs_table
5. DB folder/migration  
	- create table - you fill the columns of the table (title, content etc.)
6. models.rb
	- class Blog < ActiveRecord::Base
		end
7. Terminal
	- rake db:migrate

	
	rake -T
	will give you all commands for rake
	-----------	-----------	-----------
- post request - redirect;  
- get request - render;

- Create User and Blog and play around in the irb;
	- Foreign Key;
	- find; - it returns 1 result
	- where; - it returns an array
	- destroy;
	- update
	- connect to DB Browser; 

	    
	 

- create dependecy 
  

- sessions (cookie); sticks around while the browser window is still open. When I am logged in in FB, I open another window and when I come back I am still logged in FB; it is key value pairs


