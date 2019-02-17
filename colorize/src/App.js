import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AlbumsList } from './components/AlbumsList';

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

    console.log('constructor');

    this.state = {
      albums: [],
      representativeAlbums: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(this.status)
      .then(response => response.json())
      .then(data => {
        const firstFiveAlbums = [];
        const representFirstFiveAlbums = [];
        // console.log(1001, data.slice(0, 5), 'This is BETTER option', data);        
        let currentAlbumID = -1;
        if (!!firstFiveAlbums) {
          data.forEach(element => {
            if (element.albumId <= 5) {
              if (element.albumId !== currentAlbumID) {
                currentAlbumID = element.albumId;
                representFirstFiveAlbums.push(element);
              }

              if (element.id === 1) {
                // To see structure of the element
                console.log(element);
              }

              firstFiveAlbums.push(element);
            }
          });
        }

        console.log(representFirstFiveAlbums);

        this.setState({
          albums: firstFiveAlbums,
          representativeAlbums: representFirstFiveAlbums
        });
      })
      .catch(reason => {
        console.error(reason);
      });
  }

  render() {
    return (
      <div className="App">
        <header height={400} className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <nav>
            <a href={"/"}>Home</a>
            <a href={"/"}>About</a>
          </nav>
        </header>
        <main>
          <AlbumsList resource={this.state.representativeAlbums} />
        </main>
        <footer>
          <div className={"left-side"}>
            <div>
              © Colorize 2019
            </div>
          </div>
          <div className={"right-side"}>
            <div><a href={"/"}>Home</a></div>
            <div><a href={"/"}>About</a></div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
