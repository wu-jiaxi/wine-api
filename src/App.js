// Connect the Api
// Get Api data to display on DOM using .map
// Get Images to display on DOM
// Make images clickable, 

import React, { Component } from 'react';
import Api from './Api'
import './App.css';


class App extends Component {
  state = {  }
  render() { 
    return ( <div>
      <Api name={this.state.id}/>
    </div> );
  }
}
 
export default App;
