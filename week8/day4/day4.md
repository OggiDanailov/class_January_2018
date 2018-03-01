CC:
Create a FizzBuzz recursively

function fizzBuzz(n) {
  if (n === 100) {
    return 100
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('FizzBuzz');
    } else if (n % 5 === 0) {
      console.log('Buzz');
    } else if (n % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(''+ n);
    }
    return fizzBuzz(n + 1)
  }
};

- Validations
- validates :name, presence: true  
- validates :email, confirmation: true
- confirmation will create a "virtual attribute" on your model to check a form field against for equality. You can use this virtual attribute in your views:
<%= f.text_field :email %>  
<%= f.text_field :email_confirmation %>  
- validates :size, inclusion: {in: ["short", "tall", "grande"]}  
inclusion will check that the value for the attribute is within a certain array of options provided to the in: key.
- validates :username, length: {minimum:4, maximum:30}   
- validates :amount, numericality:true 
- numericality will check that the value for the attribute is a number.  
- validates :email, uniqueness:true  

http://guides.rubyonrails.org/active_record_validations.html
