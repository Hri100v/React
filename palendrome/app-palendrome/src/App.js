import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';

let palendrome;

export const reverseWord = (value) => {
  palendrome = [];
  for (let i = value.length - 1; i >= 0; i -= 1) {
    const letter = value[i];
    palendrome.push(letter);
  }

  // var result = palendrome.join('');
  // console.log("Result:");
  // console.log(result);
  return palendrome.join('');
};

export const handleInput = (event) => {
  console.log('handleInput()');
  // console.log(event);
};

// export const checkForm = () => {
//   console.log('checkForm()');
//   // return 1;
// };

const App = () => {
  const [submitForm, setSubmitForm] = useState();

  const clickOnSubmitButton = () => {
    // console.log(2112);
    // reverseWord('video');
    
    setSubmitForm('Change Form');
    return 'SubmitED';
  };

  return (
    <div className='app'>
      <div className='main'>
        <h1>Start Now!</h1>
        <div className='inputArea'>
          <input placeholder={'type a symetric word'} onChange={handleInput} />
          <Button data-testid='inner-button' handlingClick={() => clickOnSubmitButton()} />
        </div>
        <div className='message'>empty</div>
      </div>
      {submitForm}
    </div>
  );
}

export default App;
