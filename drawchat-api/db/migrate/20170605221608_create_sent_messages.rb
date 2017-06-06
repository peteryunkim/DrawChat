class CreateSentMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :sent_messages do |t|
      t.integer :chatroom_id
      t.integer :user_id
      t.text :content

      t.timestamps
    end
  end
end
