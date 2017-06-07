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
				return res.data
			}
		})
	}

	function handleSignIn(prop){
		signIn(prop)
		.then( res => (
			localStorage.setItem('jwt', res.data.token),
			props.setUser(res.data.user.username))
		)
	}

	const dupe = function handleDuplicateUsername(error){
		return (
			<h3>{error}</h3>
		)
	}

	return(
		<div>
			<Login signIn={handleSignIn}/>
			<h2>Or Sign Up!</h2>
			<Signup onSubmit={handleNewUser}/>
			{dupe() ? dupe() : null}
		</div>
	)
}

export default LoginOrSignupContainer
