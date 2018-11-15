class Post < ApplicationRecord
	validates_presence_of :title
	validates :content, presence: true
end


# 2.4.2 :009 > p = Post.new(title: '', content: '')
#  => #<Post id: nil, title: "", content: "", created_at: nil, updated_at: nil> 
# 2.4.2 :010 > p.save!
#    (0.1ms)  begin transaction
#    (0.1ms)  rollback transaction
# ActiveRecord::RecordInvalid: Validation failed: Title can't be blank, Content can't be blank
# 	from (irb):10
# 2.4.2 :011 > p.save
#    (0.1ms)  begin transaction
#    (0.1ms)  rollback transaction
#  => false 
# 2.4.2 :012 > 