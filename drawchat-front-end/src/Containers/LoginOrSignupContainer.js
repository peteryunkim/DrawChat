import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { createUser, signIn } from '../Api/index'

function LoginOrSignupContainer(props){
	let error;

	function handleNewUser(newUserInfo){
		createUser(newUserInfo)
			.then(function(res){
				if (res.data.error){
					return error = res.data.error
				} else {
					localStorage.setItem('jwt', res.data.token)
					localStorage.setItem('username', res.data.user.username)
					localStorage.setItem('id', parseInt(res.data.user.id))
					props.history.push('/')
				}
			})
	}

	function handleSignIn(prop){
		signIn(prop)
		.then(function(res){
				if (res.data.error){
					return error = res.data.error
				} else {
					localStorage.setItem('jwt', res.data.token)
					localStorage.setItem('username', res.data.user.username)
					localStorage.setItem('id', parseInt(res.data.user.id))
					props.history.push('/')
				}
			})
		console.log(error)
	}


	return(
		<div className="row">
			<div className='col-md-4'>
				<Login signIn={handleSignIn}/>
			</div>
			<div className='col-md-4'>
				<h2>Or</h2>
			</div>
			<div className='col-md-4'>
				<Signup onSubmit={handleNewUser}/>
			</div>
			{error ? <h1>{error}</h1> : <h1>{error}</h1>}
		</div>
	)
}

export default LoginOrSignupContainer
