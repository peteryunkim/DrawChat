class Api::V1::ChatroomsController < ApplicationController

	def show
		array_Ids = []
		name_array = []
		params[:_json].each do |name|
			array_Ids.push(name[:id].to_i)
			name_array.push(name[:username])
		end 
		byebug

		#use id's to find chatroom
		#chatroom_messages = ChatroomUser.find_by(user_id: array_Ids).chatroom.messages
		# if chatroom_messages do
		# render json: chatroom_messages
		# else


		# new_chatroom = Chatroom.create(title: name_array.split('').join(', '))
		# name_array.each do |n|
		# ChatroomUser.create(chatroom_id: new_chatroom.id, user_id: n.id)
		# end

		# end
		#chatroom_messages = ChatroomUser.find_or_create_by(user_id: array_Ids).chatroom.messages


	end

	def create


	end


end