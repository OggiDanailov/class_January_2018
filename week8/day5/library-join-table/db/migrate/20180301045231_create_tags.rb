class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
    	t.string :name
    	t.integer :book_id
    	t.integer :genre_id

      t.timestamps
    end
  end
end
