import React from 'react'
import ToolPencil from '../CanvasTools/ToolPencil'



class DisplayCanvas extends React.Component{

	constructor(){
		super()
		this.state={
			canvasUrl: "",
			started: false,
			canvasName: "",
			saved: false
		}
	}

	componentDidMount(){
		this.props.cableApp.canvas = this.props.cableApp.cable.subscriptions.create('CanvasChannel', 
		{
			received: canvasData => this.setState({
				canvasUrl: canvasData.canvasUrl
			},() => {
				this.loadCanvas()
			})
		})

		if (this.props.newCanvas === true){
			this.setState({
				canvasUrl: "",
				canvasName: this.props.name,
				saved: this.state.saved
			})
		} else if (this.props.canvasUrl.length !== 0){
				let canvas = document.getElementById('canvas')
				let ctx = canvas.getContext("2d")
				let img = new Image();
				this.setState({
					canvasUrl: this.props.canvasUrl,
					canvasName: this.props.name,
					saved: this.props.saved
				})
				img.onload = function(){
	  			ctx.drawImage(img,0,0);
  		}
  		img.src = this.props.canvasUrl
		}

		if(!this.props.saved){
			alert('Please save before you start drawing.')
		}

		this.loadCanvas()
		this.drawingOnCanvas()
	}	
	
	
	loadCanvas = () => {
		let canvas = document.getElementById('canvas')
		let ctx = canvas.getContext("2d")
		let img = new Image();

		img.onload = function(){
			ctx.drawImage(img,0,0);
		}
		img.src = this.state.canvasUrl
	}

	drawingOnCanvas = () => {
		let canvas = document.getElementById('canvas')
		let ctx = canvas.getContext("2d")

		let tool = new ToolPencil( canvas, ctx, this.handleChange);
		canvas.addEventListener('mousedown', ev_canvas, false);
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup',	 ev_canvas, false);	

		function ev_canvas (ev) {
			let x, y;

			if (ev.layerX || ev.layerX === 0) { 
				x = ev.layerX;
				y = ev.layerY;
			} 

			let func = tool[ev.type];
			if (func) {
				func(x,y);
			}
		}
	}

	saveButton(){
		this.setState({
			saved: true
		})
		this.props.onSave(this.state.canvasUrl)
	}
	
	handleChange = (url) => {
		if(this.state.saved){
			this.props.cableApp.canvas.send({canvasUrl: url, canvasName: this.props.name})
		} else {
			const data = document.getElementById('canvas').toDataURL();
			this.setState({
				canvasUrl: data
			})
		}
	}

	handleLineChange =(e) => {
		let canvas = document.getElementById('canvas')
		let ctx = canvas.getContext("2d")
		ctx.lineWidth = e.target.value
	}

	handleColorChange = (e) => {
		let canvas = document.getElementById('canvas')
		let ctx = canvas.getContext("2d")
		ctx.strokeStyle = e.target.value
	}

	eraserMode = () => {
		let canvas = document.getElementById('canvas')
		let ctx = canvas.getContext("2d")
		ctx.strokeStyle = '#ffffff'
	}


	render(){
		return(
			<div id='container'>
				<div className='row'>
				<h1 className='col-md-7' id='canvas-name'>{this.state.canvasName}
					<p>
						{this.state.saved? null : <button className="btn btn-default btn-sm" onClick={() => this.saveButton()}>
						<span className="glyphicon glyphicon-save" aria-hidden="true"></span>Save</button>}
					</p>
				</h1>
				<div className='col-md-4' id='canvas-tool'>
					<label >Line Width</label>
					<input type="range" min="0" max="20" step="0.25" defaultValue="1" onChange={this.handleLineChange}/>
						<label className='color-chooser'>Color:</label>
					<input className='color-chooser' type="color" onChange={this.handleColorChange}/>
					<button id='eraser' onClick={() => this.eraserMode()} className="btn btn-default navbar-btn">Eraser</button>
				</div>
				</div>
				<canvas id='canvas' ref='canvas' width='625' height='450' style={{border: '1px solid #000000'}}></canvas>
			</div>
		)
	}
}
export default DisplayCanvas