import React, { useState } from 'react';
import './App.css';

function App() {
  let palendrome = [];
  
  const reverseWord = (value) => {
    for (let i = value.length - 1; i <= 0; i -= 1) {
      const letter = value[i];
      palendrome.push(letter);
    }
  };

  const handleInput = (event) => {
    console.log('handleInput()');
    // console.log(event);
  };

  const checkForm = () => {
    console.log('checkForm()');
    return 1;
  };

  return (
    <div className='app'>
      <div className='main'>
        <h1>Start Now!</h1>
        
        <div className='inputArea'>
          <input placeholder={'type a symetric word'} onChange={handleInput} />
          <button onClick={checkForm}>Submit</button>
        </div>

        <div className='message'>empty</div>

      </div>
    </div>
  );
}

export default App;
