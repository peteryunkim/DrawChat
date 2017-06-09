import React from 'react'
import CanvasNames from './CanvasNames'


function CanvasList (props){
	console.log(props)
	const allCanvases = props.allCanvases.map( canvas => <CanvasNames name={canvas.name}/>)
		return(
			<div>
			{allCanvases}
			</div>
		)
}

export default CanvasList