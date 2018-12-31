import React, { Component } from 'react';
import './App.css';

import MainScreen from './containers/mainScreen';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainScreen />
      </div>  
    );
  }
}

export default App;
