class Result < ApplicationRecord
	belongs_to :chatroom
	belongs_to :moderator
end
