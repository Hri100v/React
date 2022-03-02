import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'hi there'
    }
  }

  getData = async (url) => {
    let newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json());

    console.log(newData);
    this.setState({ content: newData.result });
  }

  componentDidMount() {
    this.getData('/api');
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => { this.getData('/quit') }}>Click Quit</button>
        {this.state.content}
      </div>
    );
  }
}

export default App;
