class User < ApplicationRecord
	validates :username, uniqueness: true
	validates :password, confirmation: true
	validates :class_name, exclusion: {in: ["a", "b", "c", "d"]}
end
