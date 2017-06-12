import React from 'react'

function CanvasNames(props){

	return(
		<h4 id='canvas-names' onClick={() => props.selectCanvas(props)}>{props.name}
			<button className="btn btn-default btn-xs" onClick={() => props.onDelete(props)} >
			<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>delete</button>
		</h4>
	)
}

export default CanvasNames
