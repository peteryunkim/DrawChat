import React from 'react'

class NewCanvas extends React.Component{
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
		this.props.onDisplay(this.state.name)
		this.setState({
			name: ""
		})
	}


	render(){
		return(
			<div>
			<h3>Create a new canvas</h3>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="New canvas name..."/>
			</form>
			</div>
		)
	}
}

export default NewCanvas
