class CanvasChannel < ApplicationCable::Channel

 def subscribed
  stream_from 'canvas'
 end

 def receive(params)
 	canvas = Canvas.find_by(name: params['canvasName'])
	canvas.update(canvasUrl: params['canvasUrl'])
	puts 'CALLED'

	ActionCable.server.broadcast('canvas', CanvasSerializer.new(canvas))		

 end



end