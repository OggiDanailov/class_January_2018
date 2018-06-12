class AddAnotherColumnToUsers < ActiveRecord::Migration[5.1]
  def change
  	add_column :users, :class_name, :string
  end
end
