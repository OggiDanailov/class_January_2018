class Moderator < ApplicationRecord
	has_many :results
	has_many :chatrooms, through: :results
end
