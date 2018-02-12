
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
	- require 'sinatra/activereocrd'  
	- set :database, 'sqlite3:whatever.sqlite3'  
	- require './models'  
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

	
	
	-----------	-----------	-----------

- Foreign Key
- post request - redirect;  
- get request - render;  

- sessions - it is like cookies;