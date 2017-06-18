class Api::V1::UsersController < ApplicationController
before_action :authorize_account!, only: [:index, :show]

	def index
		users = User.all
		render json: users
	end

	def create
		user = User.new(username: params[:username], password: params[:password])
		if user.valid?
			user.save
			token = JWT.encode({user_id: user.id, user_username: user.username}, "$3cr37", 'HS256')
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
		#need to decode JWT, return user information
		# byebug
		decoded = JWT.decode(params["Authorization"], "$3cr37", true, {algorithm: "HS256"})
		user = User.find(decoded.first["user_id"])
		render json: user
	end
	
end
