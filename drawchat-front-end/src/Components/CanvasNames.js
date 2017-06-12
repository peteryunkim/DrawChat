import React from 'react'

function CanvasNames(props){
	return(
		<div>
		<a href="#" id='canvas-names' onClick={() => props.selectCanvas(props)}>{props.name}</a>
		<button className="btn btn-default btn-xs" onClick={() => props.onDelete(props)} >
		<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>delete</button>
		</div>
	)
}

export default CanvasNames
