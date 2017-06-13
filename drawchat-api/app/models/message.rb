class Message < ApplicationRecord
	# belongs_to :chatroom
	belongs_to :user
	# has_many :received_messages
	#, class_name: "User", foreign_key: "sender_id"
end
