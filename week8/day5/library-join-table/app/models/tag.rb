class Tag < ApplicationRecord
	belongs_to :genre
	belongs_to :book
end
