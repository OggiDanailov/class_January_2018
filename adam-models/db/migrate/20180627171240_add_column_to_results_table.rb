class AddColumnToResultsTable < ActiveRecord::Migration[5.1]
  def change
  	add_column :results, :winner, :string
  end
end
