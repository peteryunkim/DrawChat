import React from 'react'
import DrawChatUser from './DrawChatUser'

function DrawChatUserList(props){
	console.log(props.allUsers)
	const allUsers = props.allUsers.map( user => <DrawChatUser username={user.username}/>)
	
	return(
		<div id='all-users'>{allUsers}</div>
	)
}

export default DrawChatUserList