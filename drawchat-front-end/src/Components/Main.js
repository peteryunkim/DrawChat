import React from 'react'
import LoginOrSignupContainer from '../Containers/LoginOrSignupContainer'
import ChatContainer from '../Containers/ChatContainer'
import isLoggedIn from './HOC/isLoggedIn'
import { Route } from 'react-router-dom'

const LoggedIn = isLoggedIn(ChatContainer)

class Main extends React.Component{


	render(){

		return(
			<div>
				<Route exact path='/login' render={() => <LoginOrSignupContainer setUser={this.props.setUser}/>}/> 
				<Route path='/drawchat' component={LoggedIn}/>
			</div>
		)
	}
	
}

export default Main
