import React from 'react'
import ChatBox from '../Components/ChatBox'

function ChatContainer(props){
	return(
		<div>
			<ChatBox cableApp={props.cableApp}/>
		</div>
	)
}

export default ChatContainer