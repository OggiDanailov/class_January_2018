class AddColumnToSubjects < ActiveRecord::Migration[5.1]
  def change
  	add_column :subjects, :topic, :string
  end

end
