import React from 'react'


class Signup extends React.Component{
	constructor(){
		super();
		this.state={
			username: '',
			password: ''
		}
	}

	handleChange(prop, value){
		this.setState({
				[prop]: value
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
				<input onChange={e => this.handleChange('username', e.target.value)} value={this.state.username} type="text" placeholder="New Username"/>
				<label>Password</label>
				<input onChange={e => this.handleChange('password', e.target.value)} value={this.state.password} type="password" />
				<button>Sign-Up!</button>
				</form>
			</div>
		)
	}
}

export default Signup