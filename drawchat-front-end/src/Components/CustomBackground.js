import React from 'react'

class CustomBackground extends React.Component{

	constructor(){
		super()
		this.state={
			url: ""
		}
	}

	handleChange = (e) => {
		const input = e.target.value
		this.setState({
			url: input
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		document.body.style.backgroundImage = `url(${this.state.url})`
		this.setState({
			url: ""
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input className="form-control" type='text' value={this.state.url} onChange={this.handleChange} placeholder='For a custom background, please enter url here...'/>
			</form>
		)
	}
}

export default CustomBackground