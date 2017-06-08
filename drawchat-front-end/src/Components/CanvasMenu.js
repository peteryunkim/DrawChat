import React from 'react'
import NewCanvas from './NewCanvas'
import CanvasList from './CanvasList'

function CanvasMenu (props){


		return(
			<div>
				<NewCanvas newDrawing={props.newDrawing}/>
				<CanvasList allCanvases={props.allCanvases}/>
			</div>
		)

}

export default CanvasMenu