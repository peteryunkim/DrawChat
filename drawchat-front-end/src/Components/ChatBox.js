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
			}, () => {let list = document.getElementById('message-list')
			list.scrollTop = list.scrollHeight})
		}, getMessages()
		.then( res => this.setState({
			messages: res.data
			}))
		)
		this.onChatLoad()
	}

	onChatLoad = () => {
		let body = document.body
		const oneTime = () => {
			let list = document.getElementById('message-list')
			list.scrollTop = list.scrollHeight
			body.removeEventListener('mousemove', oneTime, false)
		}
		body.addEventListener('mousemove', oneTime, false)
	}

	focusBottomChat(){
		setTimeout(function(){ let list = document.getElementById('message-list')
		list.scrollTop = list.scrollHeight }, 100)
	}

	messageHandler(message, userId){
		this.props.cableApp.message.send({message: message, userId: userId})
		this.focusBottomChat()
	}
	
	render(){
	const messageList = this.state.messages.map((mes, i) => <Message key={i} user={mes.user.username} currentUser={this.props.currentUser} content={mes.content}/>)
		return(
			<div>
				<div ref='list' id='message-list'>
					{messageList}
				<ChatInput userId={this.props.userId} onSend={this.messageHandler.bind(this)}/>
				</div>
			</div>
		)
	}
	
}

export default ChatBox


