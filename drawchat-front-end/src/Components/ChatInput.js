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
		this.props.onSend(this.state.messageInput, localStorage.getItem('id'))
		this.setState({
			messageInput: ""
		})
	}

	render(){
		return(
			<form id='chat-input' onSubmit={this.handleSubmit.bind(this)}>
				<input className="form-control" type='text' value={this.state.messageInput} onChange={this.handleChange.bind(this)} placeholder="Enter message here..."/>
			</form>
		)
	}
}

export default ChatInput