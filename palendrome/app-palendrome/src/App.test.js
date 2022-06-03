import { render, screen, fireEvent, act } from '@testing-library/react';

import App, { reverseWord, handleInput } from './App';

import { Button, subtract, clickHandling } from './Button';

let container;
let mainContainer;
let getByTestId;
let app;

beforeEach(() => {
  // container = document.createElement('div');
  // document.body.appendChild(container);

  app = render(<App />);
  // { getByTestId } = render(<App />); 
  mainContainer = document.getElementsByClassName('main');
});

afterEach(() => {
  // document.body.removeChild(container);
  // container = null;
});

/* Start Testing */
describe('Start Testing', () => {
  test('renders initial test', () => {
    const startElement = screen.getByText(/start now/i);
    expect(startElement).toBeInTheDocument();
  });

  test('renders the main container exists', () => {
    expect(mainContainer.length > 0).toBe(true);
  });

  test('initial state of the input', () => {
    expect(mainContainer[0].getElementsByTagName('input')[0].value == 0).toBe(true);
  });

  test('button name', () => {
    expect(mainContainer[0].getElementsByTagName('button')[0].innerHTML == 'Submit').toBe(true);
  });

  test('message container exists', () => {
    const contentMessageContainer = 'empty';
    expect(mainContainer[0].getElementsByClassName('message')[0].textContent == contentMessageContainer);
  });
});

/* Functional Testing */
describe('Functional Testing', () => {

  test('"reverseWord" function', () => {
    const jestReverseWord = jest.fn(reverseWord);
    console.log(jestReverseWord('tool'));
    expect(jestReverseWord('tool')).toBe('loot');
  });

  test('"handleInput" function', () => {
    const input = mainContainer[0].getElementsByTagName('input');
    console.log(input, 5005);
    fireEvent.change(input, { target: { value: 'video' } });
    expect(input.value).toBe('video');
  });

});
