import React from 'react'
import CanvasMenu from '../Components/CanvasMenu'
import DisplayCanvas from '../Components/DisplayCanvas'
import { getDrawings } from '../Api/index'


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
		.then(res => console.log)
		// populate this.state.existingCanvases with names
	}

	newDrawing(canvasName){
		console.log(canvasName)
		this.setState({
			drawMode: true,
			canvasName
		})
	}

	onDrawing(){
		
	}

	render(){
		return(
			<div>
			<div className='col-md-2'>
				<CanvasMenu allCanvases={this.state.existingCanvases} newDrawing={this.newDrawing.bind(this)}/>
			</div>	
			<div className='col-md-6' id='container'>
				<h1>Diplay Canvas</h1>
				{this.state.drawMode? <DisplayCanvas /> : null}
			</div>	
			</div>
		)
	}	
}
export default DrawContainer