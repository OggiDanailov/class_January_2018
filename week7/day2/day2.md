##Restful protocol 
- representational state transfer - operations between internet and computer.  REST-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.
- GET
- POST
- PUT request is typically used to completely update a set of existing data. 
PUT requests redirect to a view.
PATCH
A PATCH request is meant to update a specific attribute or attributes of a 
resource. PATCH requests redirect to a view.
DELETE
A DELETE request is meant to delete the specified resource. DELETE 
request should redirect to a view.

##ApplicationController
 is practically the class which every other controller in you application is going to inherit from (although this is not mandatory in any mean).
##Flash Messages
<%= flash[:notice] if flash[:notice] %>  
<%= flash[:alert] if flash[:alert] %>  
 
- rails generate migration add_email_to_users email:string
- rails g migration ChangeColumnName
- rename_column :comments, :User_id, :user_id  

- find => This return single record if the given primary_key(id) exists in the system otherwise in will give an error.
- find_by => This will return single record depends on the given attribute, and if the value of the attribute is not exist in the DB it will return nil.
- :local - By default form submits are remote and unobstrusive XHRs. Disable remote submits with local: true.


##Rails Asset Pipeline
- The asset pipeline provides a framework to concatenate and minify or compress JavaScript and CSS assets. It also adds the ability to write these assets in other languages such as CoffeeScript, Sass and ERB.

##SASS in Rails
- create main.scss file and import the partial files

##Javascript in Rails
- delete coffee files; add main.js and make sure that you wrap everything in Jquery

#Bcrypt Gem
- add bcrypt gem and run bundle install
- create migration and for the password add t.string :password_digest
- rake db:migrate
- add has_secure_password in the model
- adds authenticate() method
- http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html

##Sessions

def create   
@user = User.where(email: params[:email]).first  
if @user && @user.password == params[:password]  
      session[:user_id] = @user.id  
       redirect_to home_path  
	end  
end


##Helper Methods
 - https://apidock.com/rails/ActionController/Helpers/ClassMethods/helper_method
 - Declare a controller method as a helper. For example, the following makes the current_user controller method available to the view:

 

