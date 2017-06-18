class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      ## create a JWT token that encodes the account_id and send that back as part of the response...
      token = JWT.encode({user_id: user.id, user_username: user.username}, "$3cr37", 'HS256')
      render json: {
        token: token
      }
    else
      render json: {error: 'No user or password found'}
    end
  end
end
