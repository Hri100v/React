import './App.css';
import React, { useState } from 'react';

let firstLoad = true;
function App() {
  const [content, setContent] = useState(['hi there']);

  const getData = async (url) => {
    let newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json());

    console.log(newData);
    setContent(newData.result);
  }

  console.log(firstLoad);

  if (firstLoad) {
    firstLoad = false;
    getData('/api');
    // setContent('test');
  }

  return (
    <div className="App">
      <button onClick={() => { getData('/quit') }}>Click Quit</button>
      {content}
    </div>
  );
}

export default App;
