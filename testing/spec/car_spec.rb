require 'car'

describe 'Car' do 

	it 'allows to read and write the property :make' do
		car = Car.new
		car.make = 'whatever'
		expect(car.make).to eq("whatever")
	end

	it 'allows to read and write propery :year' do
		car = Car.new
		car.year = 1999
		expect(car.year).to eq(1999)
	end

	it 'allows to read :wheels' do
			car = Car.new
			expect(car.wheels).to eq(4)
	end

	it 'allows colors to be an array' do
		a = []
			expect(colors).to eq(a)
	end
	
	
end





