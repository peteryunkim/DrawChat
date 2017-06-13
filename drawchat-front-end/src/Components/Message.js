import React from 'react'

function Message(props){

	return(
		<h5 id='message'> 
			<div id='message-sender'>
				{props.user}
			</div>
			{props.content}
		</h5>
	)
}

export default Message