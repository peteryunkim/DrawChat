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
		<div>
		<div className='row'>
			<div className='col-md-4'>
					<Login signIn={handleSignIn}/>
			</div>
		</div>
		<div className='row'>
			<div className='col-md-4'>
				<Signup onSubmit={handleNewUser}/>
			</div>
		</div>	
		</div>
	)
}

export default LoginOrSignupContainer
