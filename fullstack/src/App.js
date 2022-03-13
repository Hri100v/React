import './App.css';
import React from 'react';

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      content: 'hi there',
      apiResponse: '',
      isHidden: false
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

  callAPI() {
    fetch('http://localhost:5000/testAPI')
      .then(res => res.json())
      .then(res => {
        console.log(1001, res);
        this.setState({ apiResponse: res.result });
      });
  }

  componentDidMount() {
    this.getData('/api');
    this.callAPI();
  }

  handleQuit() {
    console.log('Handle Quit');

    this.getData('/quit');
    this.setState({ apiResponse: '', isHidden: true });
  }

  render() {
    let classApiResponse = 'note';
    if (this.state.isHidden) {
      classApiResponse += ' hidden';
    }

    return (
      <div className="App">
        <button onClick={() => this.handleQuit()}>Click Quit</button>
        {this.state.content}
        <div className={classApiResponse}>
          <p>test development</p>
          {this.state.apiResponse}
        </div>
      </div>
    );
  }
}

export default App;
