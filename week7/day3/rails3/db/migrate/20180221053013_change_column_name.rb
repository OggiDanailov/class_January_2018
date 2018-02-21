class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :comments, :User_id, :user_id
  end
end
