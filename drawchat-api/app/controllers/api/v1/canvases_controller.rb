class Api::V1::CanvasesController < ApplicationController

	def show
		canvases = Canvas.all
		render json: canvases
	end

	def create

	end

	def update

	end

	def delete

	end



end