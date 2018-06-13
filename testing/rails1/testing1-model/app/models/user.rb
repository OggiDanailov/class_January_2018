class User < ApplicationRecord
	validates_presence_of :username
	validates :password, presence: true
	validates_length_of :password, :minimum => 6, :maximum => 20
end
