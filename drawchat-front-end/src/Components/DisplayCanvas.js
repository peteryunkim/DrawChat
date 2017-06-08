import React from 'react'



class DisplayCanvas extends React.Component{
	constructor(){
		super()
		this.state={
			canvasUrl: ""
		}
	}
	componentDidMount(){
		const canvas= this.refs.canvas
		const dataUrl= canvas.toDataURL()
		this.setState({
			canvasUrl: dataUrl
		})
	}	

	//on changes, send canvasUrl up to drawcontainer
	


	render(){
		console.log(this.state)
		return(
			<div id='container'>
				<canvas ref='canvas' width='900' height='900' style={{border: '1px solid #000000'}}></canvas>
			</div>
		)
	}
}
export default DisplayCanvas