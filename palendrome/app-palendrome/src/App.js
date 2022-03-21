import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';

let palendrome = [];

export const reverseWord = (value) => {
  for (let i = value.length - 1; i <= 0; i -= 1) {
    const letter = value[i];
    palendrome.push(letter);
  }
};

export const handleInput = (event) => {
  console.log('handleInput()');
  // console.log(event);
};

// export const checkForm = () => {
//   console.log('checkForm()');
//   // return 1;
// };

const App = ({ handleClick }) => {
  const [submitForm, setSubmitForm] = useState();

  const clickOnSubmitButton = () => {
    setSubmitForm('Change Form');
    return '';
  };

  return (
    <div className='app'>
      <div className='main'>
        <h1>Start Now!</h1>

        <div className='inputArea'>
          <input placeholder={'type a symetric word'} onChange={handleInput} />
          {/* <button onClick={checkForm}>Submit</button> */}
          {/* <button onClick={util.formCheck}>Submit</button> */}
          <Button data-testid='inner-button' handlingClick={() => clickOnSubmitButton()} />
        </div>

        <div className='message'>empty</div>

      </div>

      {/* <button onClick={checkForm}>Submit</button> */}
      {/* <button onClick={() => handleClick()}>Submit</button> */}
      {/* <button onClick={() => setSubmitForm("Change Form")}>Submit</button> */}
      {submitForm}

      <div>
        {/* <Button data-testid='inner-button' handlingClick={() => 'Updated Content'} /> */}
      </div>
    </div>
  );
}

export default App;
