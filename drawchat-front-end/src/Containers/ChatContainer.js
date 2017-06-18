import React from 'react'
import ChatBox from '../Components/ChatBox'

function ChatContainer(props){
	return(
		<div>
			<ChatBox userId={props.userId} currentUser={props.currentUser} cableApp={props.cableApp}/>
		</div>
	)
}

export default ChatContainer