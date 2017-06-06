class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.date :dob

      t.timestamps
    end
  end
end
