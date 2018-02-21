class AddUserIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :User_id, :integer
  end
end
