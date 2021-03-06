class Api::V1::CanvasesController < ApplicationController

	def index
		canvases = Canvas.all
		render json: canvases
	end

	def create
		canvas = Canvas.new(canvasUrl: params[:canvasUrl], name: params[:canvasName])
		if canvas.valid?
			canvas.save
			render json: canvas
		else
			render json: {error: 'Canvas name already taken...'}
		end
	end

	def delete
		canvas = Canvas.find_by(name: params[:canvas][:name])
		canvas.destroy
		render json: canvas
	end

	def show
		canvas = Canvas.find_by(name: params[:canvas][:name])
		render json: canvas
	end



end