class Api::V1::ChatroomsController < ApplicationController

	def show
		# array_Ids = []
		# name_array = []
		# params[:_json].each do |name|
		# 	array_Ids.push(name[:id].to_i)
		# 	name_array.push(name[:username])
		# end 
		# byebug


		# Chatroom.joins(:chatroom_users).where('chatroom_users.user_id IN (?)', array_Ids)
#Chatroom.joins(:chatroom_users).where('chatroom_users.user_id IN (?)', [2,5,3]).distinct(:user_id)




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



# select * from users
# join chatroom_users on chatroom_users.user_id = users.id
# where chatroom_users.user_id in (2,1)
# and not exists (
#   select *
#   from chatroom_users AS cu
#   where cu.user_id = users.id
#   and cu.user_id not in (2,1)
# )
# group by chatroom_users.user_id
# having count(chatroom_users.user_id) = 2

 #  SELECT chatroom.*


	end

	def index
		chat = Chatroom.all
		render json: chat

	end


end