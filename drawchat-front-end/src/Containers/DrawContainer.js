import React from 'react'
import CanvasMenu from '../Components/CanvasMenu'
import DisplayCanvas from '../Components/DisplayCanvas'


class DrawContainer extends React.Component {
	constructor(){
		super()
		this.state={
			drawMode: false,
			canvasName: "",
			canvasUrl: ""
		}
	}

	displayDraw(canvasName){
		console.log(canvasName)
		this.setState({
			drawMode: true,
			canvasName
		})
	}

	render(){
		return(
			<div>
			<div className='col-md-2'>
				<CanvasMenu onDisplay={this.displayDraw.bind(this)}/>
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