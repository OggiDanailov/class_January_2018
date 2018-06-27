class Joiner < ApplicationRecord
	has_many :chatrooms
	has_many :debators, through: :chatrooms
end
