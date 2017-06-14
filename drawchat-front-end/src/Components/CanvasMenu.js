import React from 'react'
import NewCanvasForm from './NewCanvasForm'
import CanvasList from './CanvasList'

function CanvasMenu (props){


		return(
			<div id='canvas-menu'>
				<NewCanvasForm newDrawing={props.newDrawing}/>
				<div id='canvas-history'>
				<h3>Canvas History</h3>
					<CanvasList onDelete={props.onDelete} selectCanvas={props.selectCanvas} allCanvases={props.allCanvases}/>
				</div>
			</div>
		)

}

export default CanvasMenu