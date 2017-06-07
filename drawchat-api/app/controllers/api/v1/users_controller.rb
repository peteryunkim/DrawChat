class Api::V1::UsersController < ApplicationController

	def index
		users = User.all
		render json: users
	end

	def create
		user = User.new(username: params[:username], password: params[:password])
		if user.valid?
			user.save
			token = JWT.encode({user_id: user.id}, "$3cr37", 'HS256')
			render json: {
        user: {
          username: user.username,
          id: user.id
        },
        token: token
      }
		else
			render json: {error: 'Username already taken or Password required'}
		end
	end

	def show
		user = User.find_by(username: params[:username])
		render json: user
	end
	
end
