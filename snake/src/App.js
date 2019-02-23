import React, { Component } from 'react';
import './App.css';
import { GameSnake } from './game/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        Loading....
        <GameSnake />

      </div>
    );
  }
}

export default App;
