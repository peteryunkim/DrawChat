import React from 'react'

class NavBar extends React.Component{


	handleLogout = () => {
		localStorage.clear()
		window.location.reload()
	}


	render(){
		return(
			<nav className="navbar navbar-default">
				<div>
		      <img className='navbar-brand'alt='DrawChat!'className='logo' src='./sketch%20chat-03.png' width='150px'/>
		    </div>
					<button id='logout-button' className="btn btn-default btn-md" onClick={() =>this.handleLogout()}>Logout</button>
			</nav>
		)
	}
}

export default NavBar