import React from 'react'
import NewCanvasForm from './NewCanvasForm'
import CanvasList from './CanvasList'

function CanvasMenu (props){


		return(
			<div>
				<NewCanvasForm newDrawing={props.newDrawing}/>
				<CanvasList allCanvases={props.allCanvases}/>
			</div>
		)

}

export default CanvasMenu