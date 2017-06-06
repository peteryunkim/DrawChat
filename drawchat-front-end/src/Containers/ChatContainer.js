import React from 'react'
import MessagesList from '../Components/MessagesList'
import ChatInput from '../Components/ChatInput'


class ChatContainer extends React.Component{
	constructor(){
		super()
		this.state={
			messages: ['testing', 'test'],
			sending_user: "peter",
			receiving_users: []
		}
	}

	//get messages with correct users and replace state.messages

	messageHandler(message){
		this.setState({
			messages: [...this.state.messages, message]
		})
	}

	render(){
		return(
			<div>
				<MessagesList messages={this.state.messages}/>
				<ChatInput onSend={this.messageHandler.bind(this)}/>
			</div>
		)
	}
}

export default ChatContainer
// chat component
// search users to chat component