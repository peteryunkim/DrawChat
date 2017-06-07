import React from 'react'
import ChatBox from '../Components/ChatBox'

import DrawChatUserList from '../Components/DrawChatUserList'


class ChatContainer extends React.Component{
	constructor(){
		super()
		this.state={
			sending_user: "",
			chatroomUsers: []
		}
	}

	//get messages with correct users and replace state.messages
	componentWillMount(){
		this.setState(prevState => ({
			sending_user: localStorage.getItem('username'),
			chatroomUsers: [...prevState.chatroomUsers, { username : localStorage.getItem('username'), id: localStorage.getItem('id')}]
		}))
	}

	addToChatroomUsers(user){
		this.setState(prevState => ({
			chatroomUsers: [...prevState.chatroomUsers, user]
		}))
	}

	render(){
		console.log('from chat container', this.state)
		return(
			<div id='chat-container'>
				<DrawChatUserList onClick={this.addToChatroomUsers.bind(this)}/>
				<div id='chats'>
				<ChatBox allUsers={this.state.chatroomUsers} sender={this.state.sending_user} />
				</div>
			</div>
		)
	}
}

export default ChatContainer
// search users to chat component
// need to associate user to messages.