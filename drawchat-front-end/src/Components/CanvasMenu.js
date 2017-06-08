import React from 'react'
import NewCanvas from './NewCanvas'

class CanvasMenu extends React.Component{
	
	render(){
		return(
			<div>
				<NewCanvas onDisplay={this.props.onDisplay}/>
			
				<h2>canvas history</h2>
			</div>
		)
	}
}

export default CanvasMenu