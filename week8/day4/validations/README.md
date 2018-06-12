Validations are written in the models;


- validates_presence_of :title
- when you use the ! sign you will get the error:
for example, post.create!(title: '') give you:
ActiveRecord::RecordInvalid: Validation failed: Title can't be blank

- validates | confirmation 
validates :email, confirmation: true 
confirmation will create a "virtual attribute" on your model to check a form field against for equality. You can use this virtual attribute in your views:
<%= f.text_field :email %>
<%= f.text_field :email_confirmation %>

I will have the column email_confirmation but it has to be the same as the email field.


- inclusion will check that the value for the attribute is within a certain array of options provided to the in: key.

ActiveRecord::RecordInvalid: Validation failed: Class name is not included in the list


- validates | length
validates :username, length: {minimum:4, maximum:30}

length will check that the value for the attribute is within a minimum and/or maximum character length. The in: or is:options can also be used:
validates :username, length: {in:4..30}
validates :username, length: {is:10}

- validates | uniqueness
validates :email, uniqueness:true

 Printing Validation Errors
 @user = User.new
 @user.save
 Call .errors on that model instance.
 Now call .errors.messages

 http://khan4019.github.io/front-end-Interview-Questions/sort.html#selectionSort















