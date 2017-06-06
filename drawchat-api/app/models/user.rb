class User < ApplicationRecord
	has_many :chatroom_users
	has_many :chatrooms, through: :chatroom_users
	has_many :messages
	# , class_name: "Message", foreign_key: "sender_id"
	has_many :received_messages
	# , class_name: "ReceivedMessage", foreign_key: "receiver_id"
	
	has_secure_password
	
	validates :username, uniqueness: true
	validates :password, presence: true
	
end
