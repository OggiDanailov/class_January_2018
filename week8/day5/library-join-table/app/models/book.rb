class Book < ApplicationRecord
	belongs_to :author
	has_many :tags
	has_many :genres, :through => :tags
	
end
