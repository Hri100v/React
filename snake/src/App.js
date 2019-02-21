import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { GameSnake } from './game/game';
// import { Game } from './game';
import { GameSnake } from './game/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game/> */}
        Loading....
        <GameSnake />

      </div>
    );
  }
}

export default App;
