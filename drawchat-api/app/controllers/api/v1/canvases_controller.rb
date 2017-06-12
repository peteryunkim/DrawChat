class Api::V1::CanvasesController < ApplicationController

	def index
		canvases = Canvas.all
		render json: canvases
	end

	def create
		canvas = Canvas.new(canvasUrl: params[:canvasUrl], name: params[:canvasName])
		canvas.save
		render json: canvas
	end

	def update
		
		if canvas = Canvas.find_by(name: params[:canvasName])
			canvas.update(canvasUrl: params[:canvasUrl])
			render json: canvas
		else 
			render json: {error: 'not found'}
		end

	end

	def delete
		canvas = Canvas.find_by(name: params[:canvas][:name])
		canvas.destroy
		render json: canvas
	end

	def show #selectExistingDrawing
		canvas = Canvas.find_by(name: params[:canvas][:name])
		render json: canvas
	end



end