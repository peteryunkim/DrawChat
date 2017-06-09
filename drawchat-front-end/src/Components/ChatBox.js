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

	componentDidMount(props){
		getChatroom(this.props)
		.then( res => console.log )
	}

	componentWillReceiveProps(nextProps){
		getChatroom(nextProps.allUsers)
	}

	messageHandler(message){
		// sendMessage(message)
		this.setState({
			messages: [...this.state.messages, message]
		})
	}
	
	render(){
		console.log(this.props)
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