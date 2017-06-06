class RenameSentMessageToMessage < ActiveRecord::Migration[5.0]
  def change
  	rename_table :sent_messages, :messages
  end
end
