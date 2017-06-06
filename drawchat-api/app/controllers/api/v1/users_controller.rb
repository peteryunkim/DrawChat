class Api::V1::UsersController < ApplicationController

	def index
		users = User.all
		render json: users
	end

	def create
		user = User.new(username: params[:username], password: params[:password])
		if user.valid?
			user.save
			render json: user
		else
			render json: {error: 'Username already taken or Password required'}
		end
	end
	
end
