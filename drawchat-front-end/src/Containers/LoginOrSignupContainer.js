import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { createUser, signIn } from '../Api/index'

function LoginOrSignupContainer(props){


	function handleNewUser(newUserInfo){
		createUser(newUserInfo)
			.then(function(res){
				if (res.data.error){
					dupe(res.data.error)
				} else {
					localStorage.setItem('jwt', res.data.token)
					localStorage.setItem('username', res.data.user.username)
					localStorage.setItem('id', parseInt(res.data.user.id))
					props.history.push('/drawchat')
				}
			})
	}

	function handleSignIn(prop){
		signIn(prop)
		.then( res => (
			localStorage.setItem('jwt', res.data.token),
			localStorage.setItem('username', res.data.user.username),
			localStorage.setItem('id', parseInt(res.data.user.id)),
			props.history.push('/drawchat')
		))
	}

	const dupe = function handleDuplicateUsername(error){
		return (
			<h3>{error}</h3>
		)
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
				{dupe() ? dupe() : null}
		</div>
	)
}

export default LoginOrSignupContainer
