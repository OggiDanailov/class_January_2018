require 'rails_helper'

RSpec.describe User, type: :model do
	subject {described_class.new}
  it 'is valid with valid attributes' do
  	# Since we have not added any constraints to the model, our model object will be valid without specifying any attributes
  	# user = User.new(username: 'whatever', password: 'whatsoever')
  	# expect(user).to be_valid
  	subject.username = 'whatever'
  	subject.password = 'whatasdfasd'
  	expect(subject).to be_valid
  end

  it "it is not valid without a username" do 
  	user = User.new(username: nil)
  	expect(user).not_to be_valid
  end

  it "is not a valid without a password" do
  	user = User.new(username: 'whatever', password: nil)
  	expect(user).not_to be_valid

  end
  it 'is not valid if password is less than 6 characters' do
  	user = User.new(username: 'whatever', password: "123")
  		expect(user).not_to be_valid
  end

  it 'is not valid if password is more than 20 characters long' do
  	subject.username = 'adsfas'
  	subject.password = '123456789101123412341234'
  		expect(subject).to_not be_valid
  end
end
