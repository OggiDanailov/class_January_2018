class AddColumnToAppointmentsTable < ActiveRecord::Migration[5.1]
  def change
  	add_column :appointments, :meeting, :datetime
  end
end
