class ToolPencil {
	constructor( canvas, ctx, handleChange ) {
		this.canvas = canvas
		this.ctx = ctx
		this.handleChange = handleChange
		this.started = false
	}

	// This is called when you start holding down the mouse button
	// This starts the pencil drawing
	mousedown = (x, y) => {
			this.ctx.beginPath();
			this.ctx.moveTo(x, y);
			this.started= true
	};

	// This function is called every time you move the mouse. Obviously, it only
	// draws if the tool.started state is set to true (when you are holding down
	// the mouse button)
	mousemove = (x, y) => {
		if (this.started) {
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
	};

	// This is called when you release the mouse button
	mouseup = (x, y) => {
		if (this.started) {
			this.mousemove(x, y);
			this.started= false
			const dataUrl = this.canvas.toDataURL()
			this.handleChange(dataUrl)
		}
	};
}

export default ToolPencil