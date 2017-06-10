import React from 'react'
import CanvasNames from './CanvasNames'


function CanvasList (props){
	const allCanvases = props.allCanvases.map( canvas => <CanvasNames onDelete={props.onDelete} selectCanvas={props.selectCanvas} name={canvas.name}/>)
		return(
			<div>
			{allCanvases}
			</div>
		)
}

export default CanvasList