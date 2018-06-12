class RemoveColumnFromUsersTable < ActiveRecord::Migration[5.1]
  def change
  	remove_column :users, :password_confiration, :string
  end
end
