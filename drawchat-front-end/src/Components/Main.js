import React from 'react'
import ChatContainer from '../Containers/ChatContainer'
import DrawContainer from '../Containers/DrawContainer'

function Main(){
		return(
			<div className="row">
				<div id="draw-container" className='col-md-8 col-sm-8'>	
					<DrawContainer />
				</div>
				<div id="chat-container" className='col-md-4 col-sm-4'>	
					<ChatContainer />
				</div>
			</div>
		)
}

export default Main
