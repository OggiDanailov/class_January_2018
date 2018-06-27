class CreateJoiners < ActiveRecord::Migration[5.1]
  def change
    create_table :joiners do |t|
      t.string :name

      t.timestamps
    end
  end
end
