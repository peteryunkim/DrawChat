import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main'
import {  BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>DrawChat</h2>
        </div>
        <Router>
          <Main />
        </Router>
      </div>
    );
  }
}

export default App;
