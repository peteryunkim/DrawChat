import React from 'react'

function CanvasNames(props){
	return(
		<div>
		<a href="#" id='canvas-names' onClick={() => props.selectCanvas(props)}>{props.name}</a>
		<button onClick={() => props.onDelete(props)} >delete</button>
		</div>
	)
}

export default CanvasNames
