import React from 'react'
import CanvasMenu from '../Components/CanvasMenu'
import DisplayCanvas from '../Components/DisplayCanvas'
import { getDrawings, saveDrawingDB } from '../Api/index'


class DrawContainer extends React.Component {
	constructor(){
		super()
		this.state={
			drawMode: false,
			canvasName: "",
			canvasUrl: "",
			existingCanvases: []
		}
	}

	componentDidMount(){
		getDrawings()
		.then(res => this.setState({
			existingCanvases: res.data
			})
		)
	}


	newDrawing(canvas){
		this.currentDrawing(canvas)
	}

	currentDrawing = (canvas) => {
		console.log(canvas)
		this.setState({
			drawMode: true,
			canvasName: canvas
		})
	}

	saveDrawing = (canvasUrl) => {
		this.setState({
			canvasUrl: canvasUrl
		})
		saveDrawingDB(canvasUrl,this.state.canvasName)
		.then(res => this.setState(prevState => ({
			existingCanvases: [...prevState.existingCanvases, res.data]
		})))	
	}

	render(){
		console.log(this.state)
		return(
			<div>
			<div className='col-md-2'>
				<CanvasMenu allCanvases={this.state.existingCanvases} newDrawing={this.newDrawing.bind(this)}/>
			</div>	
			<div className='col-md-6' id='container'>
				{this.state.drawMode? <DisplayCanvas onSave={this.saveDrawing}name={this.state.canvasName}/> : null}
			</div>	
			</div>
		)
	}	
}
export default DrawContainer