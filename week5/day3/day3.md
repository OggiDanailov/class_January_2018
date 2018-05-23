Coding challenge:
Create a simple Sinatra app that has a form for username and password;
The app should check if:
if username and password values are equal to 'jeremy' and "1234" the app should open a page with content "Welcome Jeremy"
if the username and password values are equal to "oggi" and "9876" the app should open a page with content "whatever"
in any other circumstances the app should reopen the same page where the form is

Sinatra

- gem install sinatra

1. Create an app.rb file, and include the line:  
require 'sinatra'
there are ports on the computer and we can send requests to them. In case of Sinatra, it will be on port 4567.
I run it through a server that serves as a program that is listening to request. 

- check the terminal and the get requests that we send to the HTTP - we are sending GEt requests to a specific route
- - 200 is success, 404 is an error

2. create folder called views and create two files, home.erb and about.erb; views folder is default name - it will pick up the file automtically

3. search page = parameters in the url. They look like hashes (json); 
http://localhost:4567/search?request=something

4. form - the improtance of form and the imporance of name in forms - the name of the input should be the same as the name of the params term (in our case search)

5. create password to illustrates what we are going to do in the next two months

6. layout.erb and yield - all the html code from the other pages will be compiled where yield is

7. Connecting SASS and JS 

