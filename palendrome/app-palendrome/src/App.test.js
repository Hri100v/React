import { render, screen, fireEvent, act } from '@testing-library/react';

import App from './App';

import { Button, subtract, clickHandling } from './Button';

// jest.spyOn(console, 'error').mockImplementation(() => { });

/* Functional Testing */
describe('Functional Testing', () => {

  // test('click on check button', () => {
  //   // const spyFunction = jest.spyOn(App.prototype, 'checkForm');
  //   const spyFunction = jest.fn();
  //   const { queryByText } = render(<App handleClick={spyFunction} />);
  //   const button = queryByText('Submit');
  //   fireEvent.click(button);
  //   expect(spyFunction).toHaveBeenCalledTimes(1);
  // });

  test('existing of the <Button />', () => {
    const { getByTestId } = render(<App />);
    const CustomButton = getByTestId('button');
    expect(CustomButton).toBeTruthy();
  });

  // test('click on <Button />', () => {
  //   // const spyFunction = jest.spyOn(App.prototype, 'checkForm');
  //   const spyFunction = jest.fn(() => { console.log(1111) });
  //   // const spyCheckForm = jest.spyOn(Button.prototype, 'handleClick');
  //   // const { getByTestId } = render(<App />);
  //   const { getByTestId } = render(<App>
  //     <Button handleClick={() => spyFunction()} />
  //   </App>);
  //   const CustomButton = getByTestId('button');
  //   fireEvent.click(CustomButton);
  //   // expect(spyCheckForm).toHaveBeenCalledTimes(1);
  //   expect(spyFunction).toHaveBeenCalledTimes(1);
  // });

});






/* 
test('click on check button', () => {
  console.log(1001);
  // console.log(App);
  // console.log(setSubmitForm);
  // const spySubmitForm = jest.spyOn(App.prototype, 'setSubmitForm');
  const { queryByText } = render(<App />);
  const button = queryByText('Submit');
  // fireEvent.click(button);
  // expect(spySubmitForm).toHaveBeenCalledTimes(1);
  expect(button).toBeTruthy();
});

test('#2 click on check button', () => {
    const spyFunction = jest.spyOn(App.prototype, 'checkForm').mockResolvedValue({});
    // const spyFunction = jest.fn();
    const { queryByText } = render(<App />);
    const button = queryByText('Submit');
    fireEvent.click(button);
    expect(spyFunction).toHaveBeenCalledTimes(1);
  });

test('click on check button', () => {
    const spyCheckForm = jest.spyOn(App.prototype, 'checkForm');
    const wrapper = shallow(<App />);
    wrapper.find('button').simulate('click');
    expect(spyCheckForm).toHaveBeenCalled();
    expect(spyCheckForm).toBeCalledWith('checkForm()');
  });
*/