import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './Components/Main'
import LoginOrSignupContainer from './Containers/LoginOrSignupContainer'
import isLoggedIn from './Components/HOC/isLoggedIn'
import { withRouter } from 'react-router'

const withRouterLogIn = withRouter(LoginOrSignupContainer)
const LoggedInMain = isLoggedIn(Main)

class App extends React.Component{

  constructor(){
    super()
    this.state={
      username: localStorage.getItem('username')
    }
  }

  logout(){
    localStorage.clear()
    this.setState({
      username: ""
    })
  }

  render(){
    return (
      <div >
        <div className="navbar navbar-default">
          <h2 className='App-Title'>DrawChat</h2>
          <h3 className="navbar-text navbar-left">Current User: {this.state.username}</h3>
          <button id='logout-button'className="btn btn-default navbar-btn" onClick={() => this.logout()}>Logout</button>
        </div>
        <Router>
          <div>
            <Route exact path='/login' component={withRouterLogIn}/> 
            <Route path='/drawchat' render={() => <LoggedInMain cableApp={this.props.cableApp}/> }/>
          </div>
        </Router>
      </div>
    );
  }
    

  
}

export default App;
