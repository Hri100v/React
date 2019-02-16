import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  constructor(props) {
    super(props);

    const albumsArray = fetch("https://jsonplaceholder.typicode.com/photos", { albumId: 1 })
      .then(this.status)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(1001, data);
        // let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
        // data.forEach((album) => {
        //   const { id, albumId } = album;
        //   if (albumId < 6) {
        //     console.log(album, id);
        //   }          
        // });
      })
      .catch(reason => {
        console.error(reason);
      });

    this.state = {
      albums: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <div id={"root"} />
        </main>
      </div>
    );
  }
}

export default App;
