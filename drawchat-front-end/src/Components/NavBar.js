import React from 'react'

class NavBar extends React.Component{


	handleLogout = () => {
		this.props.onLogout()
	}


	render(){
		return(
			<div className="navbar navbar-default">
	      <h2 className='App-Title'>DrawChat</h2>
	      <h3 className="navbar-text navbar-left">Current User: {this.props.user}</h3>
	      <button id='logout-button'className="btn btn-default navbar-btn" >Logout</button>
			</div>
		)
	}
}

export default NavBar