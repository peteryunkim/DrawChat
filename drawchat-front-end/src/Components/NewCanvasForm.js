import React from 'react'

class NewCanvasForm
 extends React.Component{
	constructor(){
		super()
		this.state={
			name: ""
		}
	}

	handleChange(e){
		const name = e.target.value
		this.setState({
			name
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.newDrawing(this.state.name)
		this.setState({
			name: ""
		})
	}


	render(){
		return(
			<div>
			<h3>New canvas?</h3>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input className="form-control" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Canvas Name..."/>
			</form>
			</div>
		)
	}
}

export default NewCanvasForm

