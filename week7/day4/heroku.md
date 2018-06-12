Deployment on Heroku

1. You have to sign up to www.heroku.com

make sure you remember your credentials as you will be prompted to sign later from the terminal.

2. next you will need to install Heroku CLI - this is the heroku tool belt which will allow you to communicate between your computer and Heroku app. It is basically a Heroku terminal.

———

1. go to your app  and run git init.


2. write heroku create in the terminal in your project (here you will be prompted to write your credentials for heroku)

———

1. open your app in sublime or atom

2. go to your Gemfile and find gem ‘sqlite3’

3. delete it and paste on its place this:

group :development, :test do

  gem 'sqlite3'

end

group :production do

  gem 'pg'

end
(you shouldn't create two :development groups; include gem 'sqlite in existing group)

4. run bundle install --without production

5. git add .

6.git commit

7. git push heroku master - your project is deployed

——

1. heroku run rails db:migrate (you migrate the database)

2. for renaming the name of your app run:

heroku apps:rename NEW NAME OF YOUR URL --app CURRENT NAME OF YOUR URL

3. open heroku


heroku logs command in the terminal will list the last errors in case you have ones.