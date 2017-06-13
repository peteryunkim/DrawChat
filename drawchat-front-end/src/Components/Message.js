import React from 'react'

function Message(props){

	return(
		<h5> 
			<div id='message-sender'>
				{props.user}:
			</div>
			{props.content}
		</h5>
	)
}

export default Message