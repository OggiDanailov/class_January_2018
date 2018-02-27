class CreateJoinTableRoomSubject < ActiveRecord::Migration[5.1]
  def change
    create_join_table :rooms, :subjects do |t|
      t.index [:room_id, :subject_id]
      t.index [:subject_id, :room_id]
    end
  end
end
