import React from 'react'

function Message(props){

	const sender= ()=>{
		if (props.user === localStorage.getItem('username')){
				return (<h5 id='message-sender'> 
					<div id='you'>You</div>
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