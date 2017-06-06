import React from 'react'


class Signup extends React.Component{
	constructor(){
		super();
		this.state={
			username: '',
			password: ''
		}
	}

	handleUsernameChange(e){
		const username = e.target.value
		this.setState({
				username
		})
	}
	handlePasswordChange(e){
		const password = e.target.value
		this.setState({
			password
		})
	}
	handleSubmit(e){
		e.preventDefault()
		this.props.onSubmit(this.state)
	}


	render(){
		console.log(this.state)
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
				<label>New Username</label>
				<input onChange={this.handleUsernameChange.bind(this)} name='username' type="text" placeholder="New Username"/>
				<label>Password</label>
				<input onChange={this.handlePasswordChange.bind(this)} name='password' type="password" />
				<button>Sign-Up!</button>
				</form>
			</div>
		)
	}
}

export default Signup