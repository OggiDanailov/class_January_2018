# Write a function (try to use filter function in JS) that fiters only the negative odd numbers from an array. then 
# it adds the sum of it and coverts it to a positive number



 array = [1,2,3,-5,-6,-7,4, 23,34,43,45,-12,-43,34,-545]

def odds(number)
	empty = []
	sum = 0
	number.each do |ar|
		if ar > 0 && ar % 2 != 0
			empty.push(ar)
		end	
	end
	empty.each do |s|
		sum += s
	end
	puts sum
end

odds(array)


# JS

# function odds(number){  
# 	result = []  
# 	number.filter(function(x){  
# 		if(x>0 && x % 2 !== 0){  
# 			result.push(x);  
# 		}  

# 	});  

# return result;  

# }  