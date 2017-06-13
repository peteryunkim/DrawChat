class RemoveChatroomIdFromMessages < ActiveRecord::Migration[5.0]
  def change
  	remove_column :messages, :chatroom_id
  end
end
