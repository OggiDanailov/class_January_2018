class Debator < ApplicationRecord
	has_many :chatrooms
	has_many :joiners, through: :chatrooms
end
