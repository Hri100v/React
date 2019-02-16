import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CONSTRES } from './components/AlbumsList';

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

    console.log('constructor', CONSTRES);
    
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
        // console.log(1001, data.slice(0, 5), 'This is BETTER option', data);        
        const representFirstFiveAlbums = [];
        let currentAlbumID = -1;
        if (!!firstFiveAlbums) {
          data.forEach(element => {
            if (element.albumId <= 5) {
              if (element.albumId != currentAlbumID) {                
                currentAlbumID = element.albumId;
                representFirstFiveAlbums.push(element);
              }

              if (element.id == 1) {
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
          <img src={logo} style={{ weight: 100, height: 100 }} className="App-logo" alt="logo" />         
        </header>
        <main>
          <div id={"root"}>
            1234....
            {/* <ul>
              {
                this.state.representativeAlbums.map((album, i) => {
                  return <AlbumList {...album} />;
                })
              }
            </ul> */}
          </div>
          <div id={"albumsPreview"}>
              {/* <AlbumList {...this.state.representativeAlbums} /> */}
          </div>
        </main>
        <footer>
          <div className={"left-side"}>
            © Colorize 2019
          </div>
          <div className={"right-side"}>
              <div>Home</div>
              <div>About</div>
          </div>          
        </footer>
      </div>
    )
  }
}

export default App;
