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

	const allUsers = this.state.all_users.map( user => <DrawChatUser key ={user.username} onClick={this.props.onClick} user={user}/>)
		return(
		<div id='all-users'>{allUsers}</div>
		)
	}
	
}

export default DrawChatUserList