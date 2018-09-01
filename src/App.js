import React, { Component } from 'react';
import './App.css';

import RouteContainer from './routing/routecontainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteContainer></RouteContainer>
      </div>
    );
  }
}

export default App;
