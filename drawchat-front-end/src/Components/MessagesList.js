import React from 'react'
import Message from './Message'

function MessagesList(props){
	const messageList = props.messages.map(mes => <Message content={mes}/>)
		
	return(
		<div id='message-list'>
			{messageList}
		</div>
	)
}

export default MessagesList