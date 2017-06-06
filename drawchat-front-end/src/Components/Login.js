import React from 'react'

class Login extends React.Component{
	render(){
		return(
			<form>
			<h1>Please Log in</h1>
				<label>Username: </label>
				<input type="text" placeholder="Username"></input>
				<label>Password: </label>
				<input type="password"/>
				<button>Log-In</button>
			</form>
		)
	}
}

				
export default Login