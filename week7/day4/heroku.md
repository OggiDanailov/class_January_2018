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
or:
Created a heroku app but I want to change the name now???
HEROKU GIT
Have you wondered when you just type heroku create and you get an arbit name and you are really scratching your head how the hell I should deal with changing git remotes and updating the name of the app. you are at the right place.

Step 1: heroku create

This will create an app on heroku with an arbitrary name
step 2: git remote -v

Shows the url of the remote servers you have configured. 
step 3: git remote rm heroku

Go to your app on heroku and rename it there from settings of the app and save the newname. Now come back to the commandline you were previously working and continue with the following steps.

Step 4: git remote add heroku git@heroku.com:newname.git

Step 5: You can recheck if the remote url is changed using git remote -v

Step 6: git push heroku master

Push your app to heroku

YAY you are done.

References: I used various resources to post this blog.Some of them are StackOverflow, http://git-scm.com/book/en/Git-Basics-Working-with-Remotes, http://git-scm.com/book/en/Git-Branching-Remote-Branches and more..



////////////

3. open heroku


heroku logs command in the terminal will list the last errors in case you have ones.