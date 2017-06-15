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
			<h2 className='authentication'>Sign up!</h2>
				<form onSubmit={this.handleSubmit.bind(this)} className="input-group">
				<input className="form-control" onChange={e => this.handleChange('username', e.target.value)} value={this.state.username} type="text" placeholder="New Username"/>
				<input className="form-control" onChange={e => this.handleChange('password', e.target.value)} value={this.state.password} type="password" placeholder='Password'/>
				<button className="btn btn-default navbar-btn">Sign-Up!</button>
				</form>
			</div>
		)
	}
}

export default Signup