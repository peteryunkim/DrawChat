import React from 'react'

function DrawChatUser(props){

	// function startMessage(){
	// 	console.log('clicked')
	// }

	return(
		<div id='drawchat-user' onClick={ () => {props.onClick(props.user)}}>
		picture - {props.user.username}
		</div>
	)
}

export default DrawChatUser