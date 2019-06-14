import React, { Component } from 'react';
import './App.css';
import CoinFlip from './CoinFlip';

class App extends Component {
  render() {
    return (
      <div className="centre">
        <CoinFlip />
      </div>
    );
  }
}

export default App;
