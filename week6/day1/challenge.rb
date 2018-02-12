# Write a function (try to use filter function in JS) that fiters only the positive odd numbers from an array. For example,

# array = [1,2,3,-5,-6,-7,4] -> [1,3]

 array = [1,2,3,-5,-6,-7,4]

def odds(number)
	empty = []
	number.each do |ar|
		if ar > 0 && ar % 2 != 0
			empty.push(ar)
		end	
	end
	p empty
end

odds(array)