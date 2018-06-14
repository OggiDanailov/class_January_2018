require 'rspec'
require_relative 'dog'

describe User do
	describe '.first_name' do
		it 'returns first_name' do
			user = User.new("oggi", "danailov", 1977)
			expect(user.first_name).not_to be_empty
		end
	end

	describe ".last_name" do 
		it 'returns last_name not empty' do 
			user = User.new("oggi", "danailov", 1977)
			expect(user.last_name).not_to eql("")
		end
	end

	describe ".year" do
		it 'returns year' do
			user = User.new("oggi", "danailov", 1977)
			expect(user.year).to be_kind_of(Numeric) 
		end
	end

	describe "#full_name" do 
		it "returns full name" do
			user = User.new("oggi", "danailov", 1977)
			expect(user.full_name).to eql("oggi danailov")
		end
	end

	describe "#age" do 
		it 'returns a valid year' do
			user = User.new('oggi', 'danailov', 1977)
			expect(user.age).to be>0
		end
	end	

	describe "#math" do
		it "returns a valid number" do
			user = User.new('asdf', 'asdfasd', 1977)
			expect(user.math).to eq([1,2,3,4,5,6,7,8,9])
		end
	end

end







