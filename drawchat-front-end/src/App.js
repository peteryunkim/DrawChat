import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './Components/Main'
import LoginOrSignupContainer from './Containers/LoginOrSignupContainer'
import isLoggedIn from './Components/HOC/isLoggedIn'
import { withRouter } from 'react-router'

const withRouterLogIn = withRouter(LoginOrSignupContainer)
const LoggedInMain = isLoggedIn(Main)

function App () {

    return (
      <div className="App">
        <div className="App-header">
          <h2>DrawChat</h2>
        </div>
        <Router>
          <div>
            <Route exact path='/login' component={withRouterLogIn}/> 
            <Route path='/drawchat' component={LoggedInMain}/>
          </div>
        </Router>
      </div>
    );
}

export default App;
