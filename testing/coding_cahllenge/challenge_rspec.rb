require 'rspec'
require_relative 'challenge'

























describe "#alternating_array" do 
	it 'returns alternating value of an array' do
		array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
		expect(alternating_array(array)).to eql(["$",2,"%",4,"$",6,"%",8,"$",10,"%",12,"$",14,"%",16,"$",18,"%",20])
	end
end