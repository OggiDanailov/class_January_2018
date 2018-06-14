array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

def alternating_array(arr)
	array2 = []
	arr.map do |a|
		if a % 2 != 0
			array2 << "$"

		else
			array2 << a
		end
	end
	split_array(array2)
end

def split_array(arr)

	ar1 = []
	ar2 = []
	result = []
	arr.each_with_index do |a, index|
		if(index % 2 == 0 )
			ar1.push(a)
		else
			ar2.push(a)
		end	
	end
	result_array(ar1, ar2)

end

def result_array(x, y)
	array = ["$",2,"%",4,"$",6,"%",8,"$",10,"%",12,"$",14,"%",16,"$",18,"%",20]
	result = []
	x.each_with_index do |a, index|
		if(index % 2 != 0)
			a.replace("%")
		end
		result.push(a)
		result.push(y[index])
	end
		return result
end



alternating_array(array)
