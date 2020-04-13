// Connect the Api
// Get Api data to display on DOM using .map
// Get Images to display on DOM
// Make images clickable, 

import React, { Component } from 'react';
import Api from './components/Api'
import './App.css';
import Winelist from './components/Winelist'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {}
  render() {
    return (
      <Router> 
        <div className="App">
          <Api />
          <Route path="/about"
          <Winelist />
        </div>
      </Router>);
  }
}

export default App;
