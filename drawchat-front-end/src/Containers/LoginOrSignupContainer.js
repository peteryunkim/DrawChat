import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import { createUser, signIn } from '../Api/index'

function LoginOrSignupContainer(props){

	function handleNewUser(newUserInfo){
		createUser(newUserInfo)
			.then(function(res){
				if (res.data.error){
					localStorage.setItem('error', res.data.error)
					props.history.push('/login')
				} else {
					localStorage.setItem('jwt', res.data.token)
					props.history.push('/')
				}
			})
	}

	function handleSignIn(prop){
		signIn(prop)
		.then(function(res){
				if (res.data.error){
					localStorage.setItem('error', res.data.error)
					props.history.push('/login')
				} else {
					localStorage.setItem('jwt', res.data.token)
					props.history.push('/')
				}
			})
	}


	return(
		<div>
		<div className='row'>
			<div id='login' className='col-md-4'>
					<Login signIn={handleSignIn}/>
			</div>
		</div>
		{localStorage.getItem('error') ? <h1 className='error'>{localStorage.getItem('error')}</h1> : null}
		<div className='row'>
			<div id='signup' className='col-md-4'>
				<Signup onSubmit={handleNewUser}/>
			</div>
		</div>	
		</div>
	)
}

export default LoginOrSignupContainer
