class Chatroom < ApplicationRecord
	belongs_to :debator
	belongs_to :joiner
	has_many :results
	has_many :moderators, through: :results
end
