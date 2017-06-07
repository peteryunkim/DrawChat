class ApplicationController < ActionController::API

	private

	def authorize_account

	end

	def token
		request.headers['Authorization']
	end
end
