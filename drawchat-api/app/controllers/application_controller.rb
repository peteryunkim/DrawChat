class ApplicationController < ActionController::API

	private

	def authorize_account!
    if !current_account.present?
      render json: {error: 'Authorization Invalid'}
    end
  end

	def current_account
    decoded = decode(token)
    if decoded.present?
      @current_account ||= User.find_by(id: decoded.first["user_id"] )
    end
  end

	def decode(token)
    JWT.decode(token, "$3cr37", true, {algorithm: "HS256"})
    rescue JWT::DecodeError
      return nil
  end

	def token
		params["Authorization"]	
	end
end
