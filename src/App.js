// Connect the Api
// Get Api data to display on DOM using .map
// Get Images to display on DOM
// Make images clickable, 

import React, { Component } from 'react';
import Api from './components/Api'
import './App.css';
import Chateaude from './components/Chateaude'
import Lan from './components/Lan'
import Margerum from './components/Margerum'
import Owen from './components/Owen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="App">
          <Api />
          <Switch>
            <Route path="/4622" component={Chateaude} />
            <Route path="/4623" component={Lan} />
            <Route path="/4624" component={Margerum} />
            <Route path="/4625" component={Owen} />
          </Switch>
        </div>
      </Router>);
  }
}

export default App;
