import { render, screen } from '@testing-library/react';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

/* Start Testing */
describe('Start Testing', () => {
  test('renders initial test', () => {
    render(<App />);
    const linkElement = screen.getByText(/start now/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders the main container exists', () => {
    /* const { app } = */render(<App />);
    let mainContainer = document.getElementsByClassName('main');
    expect(mainContainer.length > 0).toBe(true);
  });
});