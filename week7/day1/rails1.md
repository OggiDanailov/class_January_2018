Rails
###Terminology
- CSRF - Cross Site Request Forgery
- athenticity token - a token that serves as confirmation to a given website (BoAm. makes sure that the request for withdrawing money comes from its own site)
- When you redirect to @article you are redirecting to THAT article defined by that instance stored in the variable. This surely means /articles/:id, where :id is the id of THAT article stored in the variable.

- convention over configuration;
- http://guides.rubyonrails.org/form_helpers.html

- Restful protocol - representational state transfer - operations between internet and computer.  REST-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.
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

- create welcome#index controller
- create welcome#about controller


- create model Blog
- create controller Blog
- create DB
- show rails console

- disactivate strong parameters:
- in config/application.rb file copy/paste this:
config.action_controller.permit_all_parameters = true

- rake routes
 - CRUD
 - strong params

 
 ------ Coding challenges:
 1. write a function that takes an array of numbers and checks for all the numbers that are divisible by 7 AND even. If the array does not contain such numbers return "no value found"

 2. Create a method that takes an array of names and returns all the Vowels capitalized.
 ex -> ['john', 'george', 'paul', 'ringo'] ->["jOhn", "gEOrgE", "pAUl", "rIngO"]
 
 
3.  Challenge
Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
Sample Test Cases:

Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"