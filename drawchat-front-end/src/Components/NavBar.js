import React from 'react'
import CustomBackground from './CustomBackground'

class NavBar extends React.Component{


	handleLogout = () => {
		localStorage.clear()
		window.location.reload()
	}


	render(){
		return(
			<nav className="navbar navbar-default">
				<div>
		      <img alt='DrawChat!'className='logo' src='./sketch%20chat-03.png' width='150px'/>
		      <CustomBackground />
		    </div>
					<button id='logout-button' className="btn btn-default btn-md" onClick={() =>this.handleLogout()}>Logout</button>
			</nav>
		)
	}
}

export default NavBar