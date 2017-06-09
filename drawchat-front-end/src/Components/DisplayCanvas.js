import React from 'react'
import ToolPencil from '../Api/ToolPencil'


class DisplayCanvas extends React.Component{
	constructor(){
		super()
		this.state={
			canvasUrl: "",
			started: false
		}
	}
	componentDidMount(){
		let canvas= this.refs.canvas
		let dataUrl= canvas.toDataURL()
		this.setState({
			canvasUrl: dataUrl,
			canvasName: this.props.name
		})
		this.changingCanvas()
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
		this.setState({
			canvasUrl: url
		})
	}


	render(){
		// console.log(this.state, this.props)
		return(
			<div id='container'>
			<h1 id='canvas-name'>{this.state.canvasName}
				<p>
					<button onClick={() => this.props.onSave(this.state.canvasUrl)}>Save</button>
				</p>
			</h1>
				<canvas ref='canvas' width='900' height='900' style={{border: '1px solid #000000'}}></canvas>
			</div>
		)
	}
}
export default DisplayCanvas