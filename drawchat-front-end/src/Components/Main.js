import React from 'react'
import LoginOrSignup from '../Containers/Login_or_signup'
import ChatContainer from '../Containers/ChatContainer'

import { Route } from 'react-router-dom'


class Main extends React.Component{


	render(){
		return(
			<div>
				<Route exact path='/login' component={LoginOrSignup}/> 
				<Route path='/' render={()=> <ChatContainer/>}/>
			</div>
		)
	}
	
}

export default Main
