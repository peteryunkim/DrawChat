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
			<form onSubmit={this.handleSubmit.bind(this)} className="input-group">
			<h1>Please Log in</h1>
				<input className="form-control" type="text" value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} placeholder="Username"></input>
				<input className="form-control" type="password" value={this.state.password} onChange={e => this.handleChange('password', e.target.value)}placeholder="Password"/>
				<button className="btn btn-default navbar-btn">Log-In</button>
			</form>
		)
	}
}

				
export default Login