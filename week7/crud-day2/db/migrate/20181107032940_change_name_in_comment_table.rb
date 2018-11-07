class ChangeNameInCommentTable < ActiveRecord::Migration[5.2]
  def change
  	rename_column :comments, :blogs_id, :blog_id
  end
end
