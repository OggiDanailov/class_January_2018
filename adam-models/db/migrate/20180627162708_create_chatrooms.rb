class CreateChatrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chatrooms do |t|
    	t.integer :debator_id
    	t.integer :joiner_id
      t.timestamps
    end
  end
end
