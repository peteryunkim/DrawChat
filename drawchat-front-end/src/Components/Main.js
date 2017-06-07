import React from 'react'
import LoginOrSignupContainer from '../Containers/LoginOrSignupContainer'
import ChatContainer from '../Containers/ChatContainer'
import isLoggedIn from './HOC/isLoggedIn'
import { Route } from 'react-router-dom'

const LoggedIn = isLoggedIn(ChatContainer)

class Main extends React.Component{

	constructor(){
		super()
		this.state={
			currentUser: ""
		}
	}

	setCurrentUser(currentUser){
		this.setState({
			currentUser
		})
	}

	render(){
		console.log('currently logged in: ', this.state.currentUser)
		return(
			<div>
				<Route exact path='/login' render={() => <LoginOrSignupContainer setUser={this.setCurrentUser.bind(this)}/>}/> 
				<Route path='/drawchat' component={LoggedIn}/>
			</div>
		)
	}
	
}

export default Main
