import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AlbumsList } from './components/AlbumsList';
import { Album } from './components/Album';

import { BrowserRouter, Route } from 'react-router-dom';

const NewRoute = () => {
  return <div>
    <p>Test New Route</p>
  </div>;
};

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

        console.log(representFirstFiveAlbums, firstFiveAlbums);

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
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><a href={"/"}>Home</a></li>
              <li><a href={"/"}>About</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <BrowserRouter>
            <Route path={"/album/1"} render={() => {
              // TODO: Create services to get data for particular 'album'
              let albumItems = [];

              for (const item of this.state.albums) {
                if (item.albumId === 1) {
                  albumItems.push(item);
                }
                console.log(item);
              }
              return <Album resource={albumItems} />
            }} />
          </BrowserRouter>

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
