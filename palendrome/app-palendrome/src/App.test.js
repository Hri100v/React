import { render, screen } from '@testing-library/react';
import App from './App';
import { checkForm } from './App';

// jest.mock('./App', () => { checkForm: jest.fn() });

let container;
let mainContainer;

// let checkForm

beforeEach(() => {
  // container = document.createElement('div');
  // document.body.appendChild(container);

  render(<App />);
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
  test('click on check button', () => {    
    let submitButton = mainContainer[0].getElementsByTagName('button')[0];
    submitButton.click();
    expect(checkForm).toHaveBeenCalled();
  });

  test('get input', () => {
    let input = mainContainer[0].getElementsByTagName('input')[0];
    expect(input).toBeInTheDocument();
  });

  test('matcher function', () => {
    App.checkForm = jest.fn( _ => { return 2 });
    expect(App.checkForm()).toBe(2);

    return false;
  });

  test('result checker', () => {
    return false;
  });
});
