import React from 'react'
import LoginOrSignupContainer from '../Containers/LoginOrSignupContainer'
import ChatContainer from '../Containers/ChatContainer'
import isLoggedIn from './HOC/isLoggedIn'
import { Route } from 'react-router-dom'

const LoggedInChatContainer = isLoggedIn(ChatContainer)

class Main extends React.Component{


	render(){

		return(
			<div>
				<Route exact path='/login' render={() => <LoginOrSignupContainer />}/> 
				<Route path='/drawchat' component={LoggedInChatContainer}/>
			</div>
		)
	}
	
}

export default Main
