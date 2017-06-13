class DropChatrooms < ActiveRecord::Migration[5.0]
  def change
    drop_table :chatrooms
  end
end
