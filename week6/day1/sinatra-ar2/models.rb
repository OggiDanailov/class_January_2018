class Blog < ActiveRecord::Base
	belongs_to :user, dependent: :destroy
end

class User < ActiveRecord::Base
	has_many :blogs
end