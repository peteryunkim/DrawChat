import React from 'react'
import CanvasMenu from '../Components/CanvasMenu'
import DisplayCanvas from '../Components/DisplayCanvas'
import { getDrawings, saveDrawingDB, selectExistingDrawing, deleteCanvas } from '../Api/index'


class DrawContainer extends React.Component {
	constructor(){
		super()
		this.state={
			newCanvas: false,
			selectCanvas: false,
			canvasName: "",
			canvasUrl: "",
			existingCanvases: [],
			saved: false
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
		this.setState({
			newCanvas: true,
			canvasName: canvas,
			selectCanvas: false,
			saved: false
		})
	}

	saveDrawing = (canvasUrl) => {
		this.setState({
			canvasUrl: canvasUrl
		})
		console.log('saving')
		saveDrawingDB(canvasUrl,this.state.canvasName)
		.then(res => this.setState(prevState => ({
			existingCanvases: [...prevState.existingCanvases, res.data],
		})))	
	}

	selectExistingCanvas = (name) => {
		this.resetState()
		selectExistingDrawing(name)
		.then(res => this.setState({
			canvasName: res.data.name,
			canvasUrl: res.data.canvasUrl,
			newCanvas: false,
			selectCanvas: true,
			saved: true
		}))
	}

	resetState =() => {
		this.setState({
			newCanvas: false,
			selectCanvas: false,
			canvasName: "",
			canvasUrl: "",
			saved: false
		})
	}

	handleDelete =(name)=>{
		deleteCanvas(name)
		.then( res => this.setState({
			existingCanvases: this.state.existingCanvases.filter( list => list.name !== res.data.name)
		}))
	}

	render(){
		// console.log(this.state)
		return(
			<div>
			<div className='col-md-2'>
				<CanvasMenu onDelete={this.handleDelete} selectCanvas={this.selectExistingCanvas}allCanvases={this.state.existingCanvases} newDrawing={this.newDrawing.bind(this)}/>
			</div>	
			<div className='col-md-10' id='container'>
				{this.state.newCanvas? <DisplayCanvas cableApp={this.props.cableApp}onSave={this.saveDrawing} saved={this.state.saved}newCanvas={this.state.newCanvas} name={this.state.canvasName}/> : null}
				{this.state.selectCanvas? <DisplayCanvas cableApp={this.props.cableApp}onSave={this.saveDrawing} saved={this.state.saved}canvasUrl={this.state.canvasUrl} name={this.state.canvasName}/> : null}
			</div>	
			</div>
		)
	}	
}
export default DrawContainer