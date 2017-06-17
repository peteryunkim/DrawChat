import React from 'react'

function CanvasNames(props){

	return(
		<h4 id='canvas-names' onClick={() => props.selectCanvas(props)}>
			<button className="btn btn-default btn-xs" onClick={() => props.onDelete(props)}>
			<span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>&nbsp;
			{props.name}
		</h4>
	)
}

export default CanvasNames
