class Api::V1::ChatroomsController < ApplicationController

	def show
		array_Ids = []
		params[:_json].each do |name|
			array_Ids.push(name[:id].to_i)
		end 
		byebug

		#use id's to find chatroom


	end


end