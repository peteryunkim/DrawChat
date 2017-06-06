import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { createUser, handleDuplicateUsername } from '../Api/index'


function LoginOrSignup(){


	function handleNewUser(newUserInfo){
		createUser(newUserInfo)
	}

	return(
		<div>
			<Login />
			<h2>Or Sign Up!</h2>
			<Signup onSubmit={handleNewUser}/>
		</div>
	)
}

export default LoginOrSignup
