class CreateModerators < ActiveRecord::Migration[5.1]
  def change
    create_table :moderators do |t|
      t.string :name

      t.timestamps
    end
  end
end
