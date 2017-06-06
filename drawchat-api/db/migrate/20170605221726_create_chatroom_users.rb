class CreateChatroomUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :chatroom_users do |t|
      t.integer :chatroom_id
      t.integer :user_id

      t.timestamps
    end
  end
end
