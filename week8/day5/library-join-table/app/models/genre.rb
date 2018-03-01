class Genre < ApplicationRecord
	has_many :tags
	has_many :books, :through => :tags
	
end
