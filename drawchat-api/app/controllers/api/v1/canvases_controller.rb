class Api::V1::CanvasesController < ApplicationController

	def show
		canvases = Canvas.all
		render json: canvases
	end

	def create
		canvas = Canvas.new(canvasUrl: params[:canvasUrl], name: params[:canvasName])
		canvas.save
		render json: canvas
	end

	def update

	end

	def delete

	end



end