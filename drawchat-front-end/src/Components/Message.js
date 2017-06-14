import React from 'react'

function Message(props){

	const sender= ()=>{
		if (props.user === localStorage.getItem('username')){
				return (<h5 id='message-sender'> 
					You:
					<br/>
					{props.content}
				</h5>)
		} else {
			return (<h5 id='message'> 
					{props.user}:
					<br/>
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