import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './Frame.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
          <div className="App-header">
              <span>Promise Financial</span>
              <ul id="mobilenav" class="initialState">
              
                <li><a class="nav-link" href="/about">About Us</a></li>
                <li><a class="nav-link" href="/faq">FAQ</a></li>
            
                <li><a class="nav-link" id="login-modal-button" href="/login">Sign In</a></li>
                <li><a href="/check-your-rate" class="primary-btn">Check Your Rate</a></li>
          
              </ul>
            
          </div>
          <div className="frame">
            <Frame />
          </div>
      </div>
    );
  }
}

export default App;
