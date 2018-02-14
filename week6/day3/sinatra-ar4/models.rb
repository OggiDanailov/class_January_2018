class User < ActiveRecord::Base
# validates :username, uniqueness: true, presence: true
# validates :password, presence: true
has_many :blogs, dependent: :destroy

end


class Blog < ActiveRecord::Base
belongs_to :users

end