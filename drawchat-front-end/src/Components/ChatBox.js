import React from 'react'
import Message from './Message'
import ChatInput from './ChatInput'
import { getChatroom } from '../Api/index'

class ChatBox extends React.Component{
	constructor(){
		super()
		this.state={
			messages: ['testing message', 'test mess']
		}
	}

	componentDidMount(){
		console.log('chatbox', this.props)
		getChatroom(this.props)
		.then( console.log )
	}

	componentWillReceiveProps(nextProps){
		console.log('more', nextProps.allUsers)
		getChatroom(nextProps.allUsers)
	}

	messageHandler(message){
		this.setState({
			messages: [...this.state.messages, message]
		})
	}
	
	render(){
	const messageList = this.state.messages.map((mes, i) => <Message key={i} content={mes}/>)
		return(
			<div id='message-list'>
				{messageList}
				<ChatInput onSend={this.messageHandler.bind(this)}/>
			</div>
		)
	}
	
}

export default ChatBox