class ChangeSentMessageIdtoMessageIdInReceivedMessages < ActiveRecord::Migration[5.0]
  def change
  	rename_column :received_messages, :sent_message_id, :message_id
  end
end
