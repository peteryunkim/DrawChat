class MessageSerializer < ActiveModel::Serializer
  attributes :content
  belongs_to :user
end
