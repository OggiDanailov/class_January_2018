README:

- rails new <name> -T
	it will create a Rails app without the test folders;
- add gem 'rspec-rails', '~> 3.7' in the gem file under group :test, :development
- bundle install
- rails generate rspec:install
	this command will create rspec folders in rails
- create a model User
	there will be models folder within rpsec where user_spec.rb file will be generated

- we write all the tests that we have to write and check;
- we run rspec . 
			we will see 4 pending tests - we are ready to start writing them.
	- if you see errors we have to run:
	rake db:migrate RAILS_ENV=test

---- Writing the tests