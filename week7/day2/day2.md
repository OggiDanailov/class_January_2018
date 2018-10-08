1. Write a method that takes a string and depending on the size of this string it returns this string with x for each vowel and o for each consonant

ex. 'string' => oooxoo
// string1 = "alphabet"
// function vowels(str){
//   var v = ["a","e","i","o","u"];
//   var newArray = str.split("");
//   for(let i = 0;i<newArray.length;i++){
//     if(v.includes(newArray[i])){
//       newArray[i] = "o"
//     }
//     else{
//       newArray[i] = "x"
//     }
//   }
//   console.log(newArray.join(""))
// }


2. write a method that finds all the numbers in an array that are divisible by three and then sort them in descending order (do not use sort()!!!!!)

ex. [1,2,3,4,5,6,7,8,45,65,34,23,9] => [45, 9, 6, 3]

def threes_down(array)
	holder = []
	for i in 0...array.length
		if array.max%3 == 0
			holder.push(array.max)
		end
		array.delete(array.max)
	end
	print holder
	puts " "
	# the puts is just add a "line break" basically, print looks so ugly in the terminal and i'm a BABY
end

threes_down([1,2,3,4,5,6,7,8,45,65,34,23,9])



function order(a){
var array = []
for(let x=0;x<a.length;x++){
  if(a[x] % 3 == 0){
    array.push(a[x])
  }
}

for(let i=0;i<array.length;i++){
  for(let j=0;j<array.length;j++){
    if(array[j] < array[j+1]){
      var temp = array[j]
      array[j] = array[j+1]
      array[j+1] = temp
    }
  }
}console.log(array)
}

from Lori


3. write a method that takes an array of strings and returns all the strings in alphabetical order. 

ex. => "this is so interesting" => "eeghiiiinnorssssttt"

def sortString(string)
  # string.split('').sort.join('')
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  stringArr = string.downcase.split('')
  result = []
  alphabet.each do |letter|
    if stringArr.include?(letter)
      frequency = stringArr.count(letter)
      frequency.times{result << letter}
    end
  end
  print result.join('')
end

puts sortString("this is so interesting")

------------------------------------------------


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



 Sorting an array bubble sort

array = [2,5,4,6,4,9]

 for(let i =0;i<array.length-1;i++){
	for(let j = 0;j<array.length-1;j++){
	if(array[j] > array[j + 1]){
		var temp = array[j]
		array[j] = array[i+1]
		array[i+1] =   temp
	}

	}

}

function sorting(array){
      if(array[j] > array[j + 1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] =   temp
      }
  }console.log(array)
}


function fibo(arg){
  var a  = 0;
  var b = 1;
  var temp;
  var result = 0;
  for(let i = 0;i<arg;i++){
    temp = a + b;
    a = b;
    b = temp;
    
    
  }
console.log(temp)
}
 

