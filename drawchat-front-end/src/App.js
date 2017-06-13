import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import LoginOrSignupContainer from './Containers/LoginOrSignupContainer'
import isLoggedIn from './Components/HOC/isLoggedIn'
import { withRouter } from 'react-router'
import './App.css';

const withRouterLogIn = withRouter(LoginOrSignupContainer)
const LoggedInMain = isLoggedIn(Main)

function App(props){

  return (
    <div >
    <NavBar />
      <Router>
        <div>
          <Route exact path='/login' component={withRouterLogIn}/> 
          <Route path='/' render={() => <LoggedInMain cableApp={props.cableApp}/> }/>
        </div>
      </Router>
    </div>
  );
}

export default App;
