class AddCategoryToBlogsTable < ActiveRecord::Migration[5.1]
  def change
  	add_column :blogs, :category, :text
  end
end
