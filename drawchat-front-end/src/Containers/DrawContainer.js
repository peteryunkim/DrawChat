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
		this.setState({
			newCanvas: false,
			selectCanvas: false,
			canvasName: "",
			canvasUrl: "",
			saved: false
		},() => this.currentDrawing(canvas))
		
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
		saveDrawingDB(canvasUrl,this.state.canvasName)
		.then(res => {
			if (res.data.error){
				alert(res.data.error)
			} else {
				this.setState(prevState => ({
				existingCanvases: [...prevState.existingCanvases, res.data],
			}))}
			}
		)	
	}

	selectExistingCanvas = (name) => {
		this.resetState()

		selectExistingDrawing(name)
		.then(res => 
			{if (res){
				this.setState({
					canvasName: res.data.name,
					canvasUrl: res.data.canvasUrl,
					newCanvas: false,
					selectCanvas: true,
					saved: true
				})
			}else {return null}
		})
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
		const prompt = window.prompt(`Are you sure you want to delete "${name.name}"? If so, please type the canvas name (case sensitive).`)
		if (prompt === name.name){
			deleteCanvas(name)
		.then( res => this.setState({
			existingCanvases: this.state.existingCanvases.filter( list => list.name !== res.data.name),
			newCanvas: false,
			selectCanvas: false
		}))
		} else {
			return alert(`${name.name} not deleted!`)
		}
	}

	render(){
		return(
			<div id='canvas-container'>
			<div id='canvas-menu' className='col-md-3'>	
				<CanvasMenu onDelete={this.handleDelete} selectCanvas={this.selectExistingCanvas}allCanvases={this.state.existingCanvases} newDrawing={this.newDrawing.bind(this)}/>
			</div>
			<div className='col-md-9' id='container'>
				{this.state.newCanvas? <DisplayCanvas cableApp={this.props.cableApp}onSave={this.saveDrawing} saved={this.state.saved}newCanvas={this.state.newCanvas} name={this.state.canvasName}/> : null}
				{this.state.selectCanvas? <DisplayCanvas cableApp={this.props.cableApp}onSave={this.saveDrawing} saved={this.state.saved}canvasUrl={this.state.canvasUrl} name={this.state.canvasName}/> : null}
			</div>	
			</div>
		)
	}	
}
export default DrawContainer