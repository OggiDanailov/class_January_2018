class User < ApplicationRecord
	validates :password, confirmation: true
	validates :class_name, inclusion: {in: ["a", "b", "c", "d"]}
	validates :username, uniqueness: true
end
