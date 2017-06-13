class MessageChannel < ApplicationCable::Channel

	def subscribed
		stream_from 'message'
	end

	def receive(params)
		message= Message.create(user_id: params["userId"], content: params["message"])
		ActionCable.server.broadcast('message', MessageSerializer.new(message))
	end

end
