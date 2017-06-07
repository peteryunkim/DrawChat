import React from 'react'

class Login extends React.Component{
	constructor(){
		super()
		this.state={
			username: "",
			password: ""
		}
	}

	handleChange(prop, value){
		this.setState({
			[prop]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.signIn(this.state)
	}


	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
			<h1>Please Log in</h1>
				<label>Username: </label>
				<input type="text" value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} placeholder="Username"></input>
				<label>Password: </label>
				<input type="password" value={this.state.password} onChange={e => this.handleChange('password', e.target.value)}/>
				<button>Log-In</button>
			</form>
		)
	}
}

				
export default Login