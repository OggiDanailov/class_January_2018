class CreateDebators < ActiveRecord::Migration[5.1]
  def change
    create_table :debators do |t|
      t.string :name

      t.timestamps
    end
  end
end
