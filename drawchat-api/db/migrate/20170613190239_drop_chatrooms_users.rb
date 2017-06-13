class DropChatroomsUsers < ActiveRecord::Migration[5.0]
  def change
    drop_table :chatroom_users
  end
end
