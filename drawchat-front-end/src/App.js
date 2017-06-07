import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main'
import {  BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

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

  render() {
        console.log('currently logged in: ', this.state.currentUser)
    return (
      <div className="App">
        <div className="App-header">
          <h2>DrawChat</h2>
        </div>
        <Router>
          <Main setUser={this.setCurrentUser.bind(this)}/>
        </Router>
      </div>
    );
  }
}

export default App;
