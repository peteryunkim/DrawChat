import React from 'react'
import ToolPencil from '../CanvasTools/ToolPencil'
import { editCanvas } from '../Api/index'


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
		if (this.props.newCanvas === true){
			let canvas= this.refs.canvas
			let dataUrl= canvas.toDataURL()
			this.setState({
				canvasUrl: "",
				canvasName: this.props.name,
				saved: this.props.saved
			})
			this.changingCanvas()
		} else if (this.props.canvasUrl.length !== 0){
			let canvas= this.refs.canvas
			let ctx=canvas.getContext("2d")
			let img = new Image;
			this.setState({
				canvasUrl: this.props.canvasUrl,
				canvasName: this.props.name,
				saved: this.props.saved
			})
			img.onload = function(){
  			ctx.drawImage(img,0,0);
  		}
  		img.src = this.props.canvasUrl
			this.changingCanvas()
		}
		
	}	


	componentWillReceiveProps(nextProps){
		if(nextProps.name !== this.state.name){
  		this.changeCanvas(nextProps)
		}
		this.changingCanvas()
	}
	
	changeCanvas = (nextProps) => {
			let canvas= this.refs.canvas
			let ctx=canvas.getContext("2d")
			let img = new Image;
			this.setState({
				canvasUrl: nextProps.canvasUrl,
				canvasName: nextProps.name,
				saved: nextProps.saved
			})
			img.onload = function(){
  			ctx.drawImage(img,0,0);
  		}
  		img.src = this.props.canvasUrl
	}

	changingCanvas = () => {
		let canvas= this.refs.canvas
		let ctx=canvas.getContext("2d")

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
	
	handleChange = (url) => {
		if(this.state.saved){
			editCanvas(url, this.props.name)
		.then( res => 
			this.setState({
				canvasUrl: res.data.canvasUrl
			})
		)}
	}


	render(){
		console.log(this.state)
		return(
			<div id='container'>
			<h1 id='canvas-name'>{this.state.canvasName}
				<p>
					<button className="btn btn-default btn-sm" onClick={() => this.props.onSave(this.state.canvasUrl)}>
					<span className="glyphicon glyphicon-save" aria-hidden="true"></span>Save</button>
				</p>
			</h1>
				<canvas id='canvas' ref='canvas' width='700' height='700' style={{border: '1px solid #000000'}}></canvas>
			</div>
		)
	}
}
export default DisplayCanvas