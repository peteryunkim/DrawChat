import React from 'react'

class NavBar extends React.Component{


	handleLogout = () => {
		this.props.onLogout()
	}


	render(){
		return(
			<nav className="navbar navbar-default">
				<div>
		      <img alt='DrawChat!'className='logo' src='./sketch%20chat-03.png' width='150px'/>
		    </div>
					<button id='logout-button' className="btn btn-default btn-md">Logout</button>
			</nav>
		)
	}
}

export default NavBar