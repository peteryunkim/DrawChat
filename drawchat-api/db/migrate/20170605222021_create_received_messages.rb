class CreateReceivedMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :received_messages do |t|
      t.integer :sent_message_id
      t.integer :user_id

      t.timestamps
    end
  end
end
