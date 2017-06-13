class DropReceivedMessagesTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :received_messages
  end
end
