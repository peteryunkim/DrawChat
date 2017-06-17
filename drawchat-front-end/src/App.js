import React from 'react';
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import LoginOrSignupContainer from './Containers/LoginOrSignupContainer'
import isLoggedIn from './Components/HOC/isLoggedIn'
import { getUser } from './Api/index'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css';

const withRouterLogIn = withRouter(LoginOrSignupContainer)
const LoggedInMain = isLoggedIn(Main)


class App extends React.Component{
  constructor(){
    super()
    this.state={
      user: "",
      id: 0
    }
  }

  componentDidMount(){
    // make get request for user information, send token, validate from backend, populate state with response
    // getUser(localStorage.getItem('jwt')) --- works
  }



  render(){
    return (
    <div >
    <NavBar />
      <Router>
        <div>
          <Route exact path='/login' component={withRouterLogIn}/> 
          <Route path='/' render={() => <LoggedInMain cableApp={this.props.cableApp}/> }/>
        </div>
      </Router>
    </div>
  );
  }
  
}

export default App;
