import React from 'react'
import DrawChatUser from './DrawChatUser'
import { getAllUsers } from '../Api/index'


class DrawChatUserList extends React.Component{
	constructor(){
		super()
		this.state={
			all_users: []
		}
	}

	componentDidMount(){
		getAllUsers()
		.then(res => this.setState({
			all_users: res.data
		}))
	}

	render(){
		
	const allUsers = this.state.all_users.filter( user => user.username !== localStorage.getItem('username') )
	const filteredUsers= allUsers.map(user => <DrawChatUser key ={user.username} onClick={this.props.onClick} user={user}/>)
		return(
		<div id='all-users'>{filteredUsers}</div>
		)
	}
	
}

export default DrawChatUserList
// 