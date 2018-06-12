class AddColumnToDoctorsTable < ActiveRecord::Migration[5.1]
  def change
  	add_column :doctors, :name, :string
  end
end
