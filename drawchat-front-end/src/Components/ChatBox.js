import React from 'react'
import Message from './Message'
import ChatInput from './ChatInput'
import { getMessages } from '../Api/index'

class ChatBox extends React.Component{
	constructor(){
		super()
		this.state={
			messages: []
		}
	}

	componentDidMount(){
		this.props.cableApp.message = this.props.cableApp.cable.subscriptions.create('MessageChannel',
		{
			received: res => this.setState({
				messages: [...this.state.messages, res]
			})
		}, getMessages()
		.then( res => this.setState({
			messages: res.data
			}))
		)

	}

	messageHandler(message, userId){
		this.props.cableApp.message.send({message: message, userId: userId})
	}
	
	render(){
		console.log(this.state)
	const messageList = this.state.messages.map((mes, i) => <Message key={i} user={mes.user.username}content={mes.content}/>)
		return(
			<div>
				<div ref='list' id='message-list'>
					{messageList}
				<ChatInput onSend={this.messageHandler.bind(this)}/>
				</div>
			</div>
		)
	}
	
}

export default ChatBox


