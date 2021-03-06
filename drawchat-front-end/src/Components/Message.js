import React from 'react'

function Message(props){

	const sender= ()=>{
		if (props.user === props.currentUser){
				return (<h5 id='message-sender'> 
					<div id='you'>{props.currentUser} <i>(you)</i></div>
					{props.content}
				</h5>)
		} else {
			return (<h5 id='message'> 
					<div id='not-you'>{props.user}</div>
					{props.content}
				</h5>)
		}
	}
	return(
		<div>
			{sender()}
		</div>

	)
}

export default Message