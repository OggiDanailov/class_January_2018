class Post < ApplicationRecord
	validates_presence_of :title
	validates :content, presence: true
end
