import React from 'react'

class ChatInput extends React.Component{
	constructor(){
		super();
		this.state={
			messageInput: ""
		}
	}

	handleChange(ev){
		const messageInput = ev.target.value
		this.setState({
			messageInput
		})
	}
	
	handleSubmit(ev){
		ev.preventDefault();
		this.props.onSend(this.state.messageInput)
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' onChange={this.handleChange.bind(this)}placeholder="Enter message here..."/>
			</form>
		)
	}
}

export default ChatInput