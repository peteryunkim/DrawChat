import React from 'react'
import MessagesList from '../Components/MessagesList'
import ChatInput from '../Components/ChatInput'
import DrawChatUserList from '../Components/DrawChatUserList'
import { getAllUsers } from '../Api/index'


class ChatContainer extends React.Component{
	constructor(){
		super()
		this.state={
			messages: ['testing message', 'test mess'],
			sending_user: "",
			all_users: []
		}
	}

	//get messages with correct users and replace state.messages
	componentDidMount(){
		getAllUsers()
		.then(res => this.setState({
			sending_user: localStorage.getItem('username'),
			all_users: res.data
		}))
		
	}
	messageHandler(message){
		this.setState({
			messages: [...this.state.messages, message]
		})
	}

	render(){
		console.log(this.state)
		return(
			<div id='chat-container'>
				<DrawChatUserList allUsers={this.state.all_users}/>
				<div id='chats'>
				<MessagesList sender={this.state.sending_user} messages={this.state.messages}/>
				<ChatInput onSend={this.messageHandler.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default ChatContainer
// search users to chat component
// need to associate user to messages.