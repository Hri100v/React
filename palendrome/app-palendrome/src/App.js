import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';

// export const add = (x, y) => x + y;

export let util = {
  add: null,
  formCheck: null
};


const App = ({ handleClick }) => {
  util.add = (x, y) => x + y;

  const [submitForm, setSubmitForm] = useState();

  // const checkForm = () => {
  //   // console.log('checkForm()');
  //   console.log('checkForm() #2');
  //   // return 1;
  // };

  const clickOnSubmitButton = () => {
    setSubmitForm('Change Form');
    return 'Update Content';
  };

  return (
    <div className='app'>
      {/* <button onClick={checkForm}>Submit</button> */}
      {/* <button onClick={() => handleClick()}>Submit</button> */}
      {/* <button onClick={() => setSubmitForm("Change Form")}>Submit</button> */}
      {submitForm}

      <div>
        {/* <Button data-testid='inner-button' handlingClick={() => 'Updated Content'} /> */}
        <Button data-testid='inner-button' handlingClick={() => clickOnSubmitButton()} />
      </div>
    </div>
  );
}

export default App;
