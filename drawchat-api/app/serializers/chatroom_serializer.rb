class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :chatroom_users
	has_many :users, through: :chatroom_users
	has_many :messages
end
